# umi-qiankun-micro-fe-admin

> 一切按真实微前端需求来做的微前端管理平台

## 目录说明
main-app        主应用（以下统一简称基座）
mock-service    顾名思义，mock 服务
nginx           nginx
sub-app-*       子应用

## 运行说明
```shell
// 基座
cd main-app
npm run start

// mock 服务
cd mock-service
npm run dev

// nginx
cd nginx-1.20.2
start nginx-1.20.2

// 子应用
cd sub-app-*
npm run start / npm run dev / npm run serve（视子应用所用框架具体启动命令而定）
```

## 为什么使用 nginx
一个域名分发所有、屏蔽真实IP端口、减少请求地址等网络配置、减少不必要网络开通申请等等，我们实际工作情况中也是如此使用的