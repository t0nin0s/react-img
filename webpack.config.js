const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const src = resolve(__dirname, 'src')

module.exports = {
  entry: `${src}/index.js`,
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader?modules&camelCase=dashes,localIdentName='[name]-[local]-[hash:base64:6]'"
      })
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/index.html`
    }),
    new ExtractTextPlugin('style.css'),
    new DashboardPlugin()
  ]
}
