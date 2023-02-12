const HtmlWebpack = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false
        }
      }
    ]
  },

  optimization: {},

  plugins: [
    new HtmlWebpack({
      title: 'Mi Webpack App',
      // filename: 'index.html' optional
      template: './src/index.html'
    })
  ]
}