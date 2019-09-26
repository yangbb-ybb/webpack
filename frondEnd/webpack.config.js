var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 分包 css 文件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 定义环境变量
const DefinePlugin = require("webpack/lib/DefinePlugin");

// 前后端 同构代码 必须使用的 插件
//const { VueLoaderPlugin } = require('vue-loader');

// process.env.NODE_ENV 当前环境变量
var args = require('minimist')(process.argv.slice(2));
let mode = args.env;// 当前的环境
// webpack 配置项
const config = {
  entry: {
    app: ["@babel/polyfill", "./src/main.js"]
  },
  //entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    //publicPath: '/dist/',
    filename: 'js/[name]-[hash:8].js',
  },
  mode: mode,
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
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                // modules: true,
                // minimize: true,
                // sourceMap: false
              }
            },
            { loader: 'postcss-loader' },
          ]
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                // modules: true,
                // minimize: true,
                // sourceMap:false
              }
            },
            {
              loader: 'postcss-loader',
            },
            { loader: 'less-loader' }
          ]
        })
      },
    ]
  },
  devtool: mode === 'production' ? 'none' : "inline-source-map", //"none"
  devServer: {
    historyApiFallback: true,
    port: 8080,
    overlay: {
      error: true
    },
    proxy: {// agent cross-domain interface
      "/api": {
        target: "http://localhost:3000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    hot: true,// hot loading
    clientLogLevel: "none", // cancel console client log
    open: false
  },

  plugins: [
    // 同构插件
    //new VueLoaderPlugin(),
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
    new ExtractTextPlugin({ filename: 'css/[name].[hash:6].css', allChunks: true }),
    // 全局定义变量，可侵入源代码
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode)
      }
    }),
  ]
};
// 进行生产环境  需要加快打包速度 压缩代码
if (mode === 'production') {
  // 首先 进行代码的 压缩

}
// 导出
module.exports = config;