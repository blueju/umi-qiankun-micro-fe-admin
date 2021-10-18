export function getApps() {
  return [
    {
      name: 'sub-app-1',
      entry: '//localhost:8001',
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
    },
  ];
}

export default {
  'GET /api/getApps': getApps(),
};
