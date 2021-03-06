/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app infoa
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587608768118_9872';

  // add your middleware config here
  config.middleware = [];
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '45.76.172.8',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'walle',
      // database
      database: 'qwj_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  config.security = {
    csrf: {
      enable: false
    },
    // domainWhiteList: ['http://www.qiweijie.com', 'http://localhost:3000', 'http://localhost:3001']
    domainWhiteList:['*']
  };
  config.cors = {
    // origin: 'http://localhost:3001',
    credentials: true,//允许cookie可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
 /*  config.cluster = {
    listen: {
      port: 7001,
      hostname: process.env.NODE_ENV === 'development' ? '127.0.0.1' : 'localhost'
    }
  } */

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
