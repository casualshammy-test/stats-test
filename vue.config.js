module.exports = {
  chainWebpack: (config) => {
    config.module
	  .rule('raw')
      .test(/\.txt$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();

    config.externals = {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        root: 'Vue'
      }
    };
  },
  devServer: {
    disableHostCheck: true
  },
  pluginOptions: {}
};
