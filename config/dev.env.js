'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// 本地环境配置
// apiPath —— 后端接口地址
// path —— 前端访问地址配置
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  apiPath: '""',
  path: '""',
})
