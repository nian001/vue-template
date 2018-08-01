'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')
// 测试环境打包配置
module.exports = merge(devEnv, {
  apiPath: '""',
  title: '测试',
})
