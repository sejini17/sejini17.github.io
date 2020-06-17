module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  // outputDir: '../resources/static'
  // publicPath: '/',
  
  outputDir: '../btv-demo',
  publicPath: '/btv-demo/',


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

      '/vod/btv/api/v1.0/sim_content': {
        target: 'http://localhost:8857',
          // target: 'https://sejini17.github.io/test-data/test_result.json',
        changeOrigin: true
      },
    }
  }

}