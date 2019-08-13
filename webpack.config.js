/**
 * ps:  这个是最基础的webpack配置基础包
 * 肯定是不符合实际生产环境的配置需求的
 * **/
//一些基础管理包
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');    //生成html模板 自动注入script标签
const CopyWebpackPlugin = require('copy-webpack-plugin');    //复制static 里面的代码
const VueLoaderPlugin = require('vue-loader/lib/plugin');    // css 文件使用 precss

const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分包加载
module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]-[hash:6].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        // 优化1 
        //modules:[path.resolve(__dirname,'node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    module: {
        rules: [
            //加载vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        })
                    }
                }
            },
            //加载图片 文件 limit属性 <10000的直接被打包成base64
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            //问题  页面挂载不出来  --->  页面加载需要new vue() 若按cli的写法 需要配置 reslove
            //嗯 js 没有加载出来 可能是需要loader  麻痹的 先缓缓线上loader再说
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //include: [], //需要使用babel的文件
                exclude: /(node_modules|app-server.js)/,
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 8080,
        contentBase: false,
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin("style.css"),

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './static'),
                to: 'static',
                ignore: ['.*']
            }
        ])
    ]
}