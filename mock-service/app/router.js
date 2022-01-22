'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getUserInfo', controller.mainApp.getUserInfo);
  /**
   * 以下复刻自 ant deisgn pro admin 自带的 mock
   */
  router.get('/api/users', controller.mainApp.users);
  router.get('/api/currentUser', controller.mainApp.currentUser);
  router.get('/api/notices', controller.mainApp.notices);
  router.post('/api/login/account', controller.mainApp.login_account);
  router.get('/api/login/captcha', controller.mainApp.login_captcha);
};
