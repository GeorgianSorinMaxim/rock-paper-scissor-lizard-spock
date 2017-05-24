const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: { presets: ['es2015'] },
      exclude: /\.spec\.js$/
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.html'],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })]
}
