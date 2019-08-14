var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 分包 css 文件
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// process.env.NODE_ENV 当前环境变量
// webpack 配置项
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    //publicPath: '/dist/',
    filename: 'js/[name]-[hash:8].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,//耗时
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.css$/,
        // use: [
        //   { loader: 'vue-style-loader' },
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       modules: true,
        //     }
        //   },
        //   { loader: 'postcss-loader' }
        // ]
        // 配置 css loader 文件
        loader: ExtractTextPlugin.extract({
          //use: "css-loader!postcss-loader"
          use: [
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
          ]
        })
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  plugins: [
    // 模板html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // vue-loader 伴生
    new VueLoaderPlugin(),
    // 复制 static文件夹
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),
    new ExtractTextPlugin({ filename: 'css/[name].[hash:6].css', allChunks: true })
  ]
};