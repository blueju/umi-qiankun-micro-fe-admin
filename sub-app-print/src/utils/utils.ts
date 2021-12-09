/**
 * 克隆内联样式到 iframe
 * @param innerIframe iframe
 */
function cloneInternalStyle2Iframe(innerIframe: HTMLIFrameElement) {
  const internalStyle = document.querySelectorAll('style');
  const fragment = document.createDocumentFragment();
  internalStyle.forEach((item) => fragment.appendChild(item.cloneNode(true)));
  innerIframe.contentDocument!.head.appendChild(fragment);
}

/**
 * 克隆外联样式到 iframe
 * @param innerIframe iframe
 */
function cloneExternalStyle2Iframe(innerIframe: HTMLIFrameElement) {
  const links = document.head.querySelectorAll('link');
  /* 外联样式请求队列 */
  const linkRequestQueue: Promise<Response | string>[] = [];
  links.forEach((item) =>
    linkRequestQueue.push(fetch(item.href).then((response) => response.text())),
  );
  return Promise.allSettled(linkRequestQueue).then((values) => {
    const fragment = document.createDocumentFragment();
    values.forEach((item) => {
      if (item.status === 'fulfilled') {
        const style = document.createElement('style');
        style.innerHTML = item.value as string;
        fragment.appendChild(style);
      }
    });
    innerIframe.contentDocument!.head.appendChild(fragment);
  });
}

/**
 * 取消 iframe 的 html 最小宽度 min-width
 * @param innerIframe iframe
 */
function unsetIframeHtmlMinWidth(innerIframe: HTMLIFrameElement) {
  const style = document.createElement('style');
  style.innerHTML = 'html{min-width: unset;}';
  innerIframe.contentDocument!.head.appendChild(style);
}

/**
 * 打印
 * @param element 要打印的 dom 元素
 * @param innerIframe iframe
 */
function print(element: HTMLElement, innerIframe: HTMLIFrameElement) {
  const cloneElement = element.cloneNode(true);
  innerIframe.contentDocument!.body.appendChild(cloneElement);
  innerIframe.contentWindow?.print();
  document.body.removeChild(innerIframe);
}

/**
 * 通过 iframe 实现的打印
 * @param element 要打印的 dom 元素
 */
export default function ngfePrint(element: HTMLElement) {
  let innerIframe = document.createElement('iframe');
  document.body.appendChild(innerIframe);
  cloneInternalStyle2Iframe(innerIframe);
  // @ts-ignore
  if (window.__POWERED_BY_QIANKUN__) {
    // 如果在基座，qiankun 会将子应用样式转换为内联样式，因此不再需要将子应用外联样式转为内联样式。
    // 但如果是基座使用本方法，可能有问题，因为基座部分样式存在于外联样式中。
    unsetIframeHtmlMinWidth(innerIframe);
    print(element, innerIframe);
  } else {
    // 如果不在基座中，则需要将子应用外联样式转为内联样式，因为子应用样式是通过 umi.css 外联样式引入的。
    cloneExternalStyle2Iframe(innerIframe).then(() => {
      unsetIframeHtmlMinWidth(innerIframe);
      print(element, innerIframe);
    });
  }
}
