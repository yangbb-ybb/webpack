/**
 * ps:  这个是最基础的webpack配置基础包
 * 肯定是不符合实际生产环境的配置需求的
 * **/
//一些基础管理包
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');    //生成html模板 自动注入script标签
// const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports ={
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    module: {
        rules: [
            //加载vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
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
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     //include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')], //需要使用babel的文件
            //     exclude: /(node_modules|app-server.js)/,
            // }
        ]
    },
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}