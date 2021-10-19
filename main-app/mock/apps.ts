export interface IApp {
  /* 应用名称 */
  name: string;
  /* 应用名称（中文） */
  chineseName: string;
  /* 应用入口 */
  entry: string;
  /* 应用图标 */
  icon: string;
  /* 应用首页 */
  homepage: string;
}

export function getApps() {
  return [
    {
      name: 'sub-app-1',
      chineseName: 'Umi微应用',
      entry: 'http://localhost:8001',
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      homepage: '/sub-app-1/index',
    },
  ] as IApp[];
}

export default {
  'GET /api/getApps': getApps(),
};
