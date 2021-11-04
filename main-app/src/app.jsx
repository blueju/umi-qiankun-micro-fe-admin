/**
 * 按需加载组件 dynamic，
 * https://umijs.org/zh-CN/docs/load-on-demand
 */
// import { dynamic } from 'umi';

import { getAuthority } from './utils/authority';
// import LoadingComponent from '@/components/PageLoading';

/**
 * 根据环境获取正确的 url
 * @param api string
 * @returns {string|string}
 */
function getCorrectUrlWithEnv(api) {
  return process.env.NODE_ENV === 'production'
    ? `http://rest.apizza.net/mock/107ab2963748da6c52e2463943c117be${api}`
    : api;
}

// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = () => {
  if (getAuthority()) {
    return fetch(getCorrectUrlWithEnv('/api/getUserInfo'))
      .then((res) => res.json())
      .then((resJson) => {
        const { apps = [], routes = [] } = resJson;
        const handleRoutes = (innerRoutes) => {
          return innerRoutes.map((item) => {
            return {
              ...item,
              microApp: item.app,
            };
          });
        };
        return Promise.resolve({
          // 注册子应用信息
          apps,
          routes: handleRoutes(routes),
          // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
          lifeCycles: {
            afterMount: (props) => {
              console.log(props);
            },
          },
          // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
        });
      });
  }
  return Promise.resolve({
    // 注册子应用信息
    apps: [],
    // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
    lifeCycles: {
      afterMount: (props) => {
        console.log(props);
      },
    },
    // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
  });
};

/**
 * 以下代码暂时不删除，很有参考价值，它具有更高的灵活性
 */
// let extraRoutes = [];
//
// export function patchRoutes({ routes }) {
//   extraRoutes.forEach((item) => {
//     routes[0].routes[1].routes[0].routes.unshift({
//       name: item.name,
//       icon: 'smile',
//       path: item.path,
//       /** 子应用路由不显示在菜单中 */
//       hideInMenu: true,
//       component: dynamic({
//         loader: () =>
//           import(/* webpackChunkName: 'layouts__MicroAppLayout' */ '@/layouts/MicroAppLayout'),
//         loading: LoadingComponent,
//       }),
//     });
//   });
// }
//
// export async function render(oldRender) {
//   if (getAuthority()) {
//     fetch(getRoutesUrl)
//       .then((res) => {
//         return res.json();
//       })
//       .then((resJson) => {
//         extraRoutes = resJson;
//         oldRender();
//       });
//   } else {
//     oldRender();
//   }
// }
