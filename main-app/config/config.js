// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'hash',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // 快速刷新功能 https://umijs.org/config#fastrefresh
  fastRefresh: {},
  /**
   * 删除后可消除 ie11 识别模板字符串``为无效字符的报错
   * 参考地址：
   * https://github.com/umijs/umi/issues/6921#issuecomment-876093382
   */
  esbuild: {},
  /**
   * 如果需要在 npm run start 本地测试阶段，用 ie11 测试，还需要注释下面这行：
   * 参考地址：
   * https://github.com/ant-design/ant-design-pro/issues/8927#issuecomment-903117560
   */
  webpack5: {},
  /**
   * 因为需要的是动态注册子应用，所以此处置空即可。
   */
  qiankun: {
    master: {},
  },
  /**
   * 如果需要在 npm run start 本地测试阶段，用 ie11 测试，还需要注释下面这行：
   * 参考地址：
   * https://github.com/ant-design/ant-design-pro/issues/8927#issuecomment-903117560
   */
  mfsu: {}
});
