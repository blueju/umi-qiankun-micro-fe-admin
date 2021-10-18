/* 前缀 */
const prefix = 'api';

/**
 * 拼接生成 api url
 * @param api API
 */
function generateApiUrl(api: string) {
  return `/${prefix}/${api}`;
}

export const getAppsUrl = generateApiUrl('getApps');
export const getRoutesUrl = generateApiUrl('getRoutes');
