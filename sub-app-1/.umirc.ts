import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    /** 首页 */
    { path: '/', component: '@/pages/index' },
    /** 表单页 */
    { path: '/form', component: '@/pages/Form/index' },
    /** 表格页 */
    { path: '/table', component: '@/pages/Table/index' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {}
  }
});
