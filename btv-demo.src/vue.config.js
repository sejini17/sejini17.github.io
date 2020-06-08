module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  // outputDir: '../resources/static'
  outputDir: '../btv-demo',

  publicPath: '/btv-demo/',


  devServer: {
    proxy: {
      '/api': {
        target: 'https://sejini17.github.io',
        // target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
      },
      '/test-data': {
        target: 'https://sejini17.github.io',
        changeOrigin: true
      },
      '^/api-sample': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  }

}