interface IApp {
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

/* 扩展了连通性状态的 app interface */
interface IAppWithConnectionStatus extends IApp {
  connectionStatus: 'pending' | 'resolve' | 'reject';
}

/* app 连接状态的 interface */
interface IAppConnectionStatus {
  /* 等待中 */
  pending: 'pending';
  /* 连接正常 */
  resolve: 'resolve';
  /* 连接异常 */
  reject: 'reject';
}
