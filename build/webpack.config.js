//一些基础管理包
const path = require('path')

module.exports={
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
}