let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'production',
    entry:{
        home:'./src/index.js',
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    watch:true,     //监控代码变化，实时打包
    watchOptions:{
        poll:1000,    //1秒问我一千次
        agregateTimeout:500,    //防抖  我一直输入代码
        ignore:/node_modules/,     //忽略哪些文件   
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
            // chunks:['home']
        }),
    ]
}