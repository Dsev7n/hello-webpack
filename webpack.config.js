let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    mode:'development',
    entry:{
        home:'./src/index.js',
    },
    devServer:{
        port:3000,
        open:true,
        contentBase:'./dist'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                include:path.resolve('src'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:[
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname, 'dist')
    },
    
}