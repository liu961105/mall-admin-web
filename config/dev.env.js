'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//后台接口地址
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  /* 本地服务*/
  //BASE_API: '"http://localhost:8080"',
  //后台不启动
  BASE_API:'"http://120.27.63.9:8080"'
})
