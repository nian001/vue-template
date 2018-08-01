'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')
// 预发布环境打包配置
// apiPath —— 后端接口地址
// path —— 前端访问地址配置
module.exports = merge(devEnv, {
  apiPath: '""',
  path: '""',
  title: '预发布',
})
