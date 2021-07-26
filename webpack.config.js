const path = require('path')
const cc = require('./config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/**@type {import('webpack').Configuration} */
const config = {
  // entry: path.resolve(__dirname, './src/index.js'),
  entry:{
    a:path.resolve(__dirname, './src/chunks-test/a.index.js'),
    b:path.resolve(__dirname, './src/chunks-test/b.index.js'),
  },
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname)
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'async'
    }
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
    new CleanWebpackPlugin()
  ],
}
module.exports = config