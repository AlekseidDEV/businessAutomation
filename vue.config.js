const { defineConfig } = require('@vue/cli-service')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production') {
      config.plugins.push(new PurgeCSSPlugin({
        paths: glob.sync([
          path.join(__dirname, './public/index.html'),
          path.join(__dirname, './src/**/*.css'),
          path.join(__dirname, './src/**/*.js'),
        ]),
        rejected: true
      }))
    }
    config.plugins.push(new webpack.DefinePlugin({
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    }))
  }
})
