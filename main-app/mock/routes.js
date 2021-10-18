export function getRoutes() {
  return [
    {
      name: 'sub-app-1',
      path: '/sub-app-1',
    },
  ];
}

export default {
  'GET /api/getRoutes': getRoutes(),
};
