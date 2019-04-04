//打包多页应用
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    //多入口
    entry:{
        home:'./src/index.js',
        other:'./src/other.js'
    },
    output:{
        //[name]表示home或other
        filename:'[name].js',
        path:path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'home.html',
            chunks:['home']
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'other.html',
            chunks:['other'],
        }),
    ]
}