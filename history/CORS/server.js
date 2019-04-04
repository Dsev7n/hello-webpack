//express
//自己写一个服务器
let express = require('express');
let app = express();
let webpack = require('webpack');

//中间件
// let middle = require('webpack-dev-middleware');

// let config = require('./webpack.config.js');
// let compiler = webpack(config);       


// app.use(middle(compiler));  //在服务器端启动webpack


app.get('/user', (req,res) => {
    res.json({name:'maomi'});
})      //访问这个路径就会返回这个数据



app.listen(3001);