let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
// //小插件，每次打包前先检查一下有没有重复的文件，如果有就先删掉
// let CleanWebpackPlugin = require('clean-webpack-plugin');      
// //版权声明小插件，bannerPlugin  内置
// let webpack = require('webpack'); 
module.exports = {
    mode:'production',
    devServer:{

        //3)有服务端，不想用代理来处理，想在服务端中启动webpack，端口用服务端端口

        //2)我们前端只想单纯来模拟数据
        // before() {   //提供的方法  钩子
        //     app.get('/user', (req,res) => {
        //          res.json({name:'maomi-before'})
        //     })      //访问这个路径就会返回这个数据
        // }
        //1)
        proxy:{  //重写的方式，把请求代理到express服务器上
            '/api':{
                target:'http://localhost:3001',
                pathRewrite:{'/api': ''}         //应该是一个对象
            }     //配置了一个代理,处理跨域问题
        }
    },
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
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
        }),
        // new CleanWebpackPlugin('./dist'),     //传入需要清空的文件的路径  
        // new webpack.BannerPlugin('make 2019 by d7'),   //内置的版权声明插件
    ]
}
