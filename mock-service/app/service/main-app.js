'use strict';

const Service = require('egg').Service;

class MainAppService extends Service {
  getApps() {
    return [
      {
        name: 'sub-app-1',
        chineseName: 'Umi微应用',
        entry: 'http://localhost:8001',
        icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
        homepage: '/sub-app-1/index',
      },
      {
        name: 'sub-app-2',
        chineseName: 'React微应用',
        entry: 'http://localhost:8002',
        icon: 'https://www.runoob.com/wp-content/uploads/2016/02/react.png',
        homepage: '/sub-app-2/index',
      },
      {
        name: 'sub-app-3',
        chineseName: 'Vue微应用',
        entry: 'http://localhost:8003',
        icon: 'https://www.runoob.com/wp-content/uploads/2017/01/vue.png',
        homepage: '/sub-app-2/index',
      },
      {
        name: 'sub-app-4',
        chineseName: 'Angular微应用',
        entry: 'http://localhost:8004',
        icon: 'https://www.runoob.com/wp-content/uploads/2014/06/angular.jpg',
        homepage: '/sub-app-2/index',
      },
    ];
  }
  getRoutes() {
    return [
      {
        name: 'Umi微应用',
        app: 'sub-app-1',
        path: '/sub-app-1',
        children: [
          {
            name: '首页',
            title: '首页',
            path: '/sub-app-1/index',
            exact: true,
          },
          {
            name: '表单页',
            title: '表单页',
            path: '/sub-app-1/form',
          },
          {
            name: '表格页',
            title: '表格页',
            path: '/sub-app-1/table',
          },
        ],
      },
    ];
  }
}

module.exports = MainAppService;
