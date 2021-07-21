const path = require('path')
const cc = require('./config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**@type {import('webpack').Configuration} */
const config = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ["style-loader",
          {
            loader: 'css-loader',
            options: { 
              modules: {
                localIdentName: cc.path,
              },
              importLoaders: 1,
            },
          }, "sass-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}
module.exports = config