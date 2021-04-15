const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
function resolve (dir) {
  return path.join(__dirname, dir);
}
const vueConfig = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH + '/',

  configureWebpack: {
    plugins: [
      new WebpackBar(),
      new webpack.IgnorePlugin(/^\.\locale$/, /moment$/)
    ]
  },

  chainWebpack: (config) => {
    config.resolve.alias
    .set('@$', resolve('src'));
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      });
  },

  devServer: {
    port: 8000,
  },

  productionSourceMap: false,
  lintOnSave: true,
};

module.exports = vueConfig;
