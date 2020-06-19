module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  outputDir: '../btv-demo',
  // publicPath: '/btv-demo/',
  publicPath: '/',
  // outputDir: '../resources/static'
  


  devServer: {
    proxy: {
      // '/api': {
      //   target: 'https://sejini17.github.io',
      //   // target: 'http://localhost:8080',
      //   changeOrigin: true,
      //   pathRewrite: {
      //       '^/api': ''
      //   }
      // },
      '^/api-sample': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },


      '/test-data': {
        target: 'https://sejini17.github.io',
        changeOrigin: true
      },

      '/vod': {
        target: 'http://localhost:8857',
        changeOrigin: true
      },
    }
  }

}