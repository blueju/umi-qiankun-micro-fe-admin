export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
                /** 欢迎页路由不显示在菜单中 */
                hideInMenu: true,
              },
              {
                path: '/main-app',
                name: '主应用',
                authority: ['admin'],
                flatMenu: true,
                routes: [
                  // 进入权限管理，默认跳转至应用管理
                  {
                    path: '/main-app/',
                    redirect: '/main-app/app-manage',
                  },
                  {
                    path: '/main-app/app-manage',
                    name: '应用管理',
                    icon: 'smile',
                    component: './AppManage/',
                    authority: ['admin'],
                  },
                ],
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
