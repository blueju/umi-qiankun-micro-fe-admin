import { getApps, IApp } from './apps';
import { getRoutes } from './routes';

interface IUserInfo {
  apps: IApp[];
  routes: object[];
}

export function getUserInfo() {
  return {
    apps: getApps(),
    routes: getRoutes(),
  } as IUserInfo;
}

export default {
  'GET /api/getUserInfo': getUserInfo(),
};
