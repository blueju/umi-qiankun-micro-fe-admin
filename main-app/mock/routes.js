export function getRoutes() {
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

export default {
  'GET /api/getRoutes': getRoutes(),
};
