module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  // outputDir: '../resources/static'
  outputDir: '../btv-demo',
  publicPath: '/btv-demo/',


  devServer: {
    proxy: {
      '^/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '^/foo': {
        target: '<other_url>'
      }
    }
  }

}