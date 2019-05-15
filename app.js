//引入express
const express=require('express');
var server=express();
server.listen(8080);
//引入中间件
const bodyParser=require('body-parser');
//在路由前面使用中间件，所有的中间件都是给服务器设置的
//引入路由
const userRouter=require('./routes/user.js');
//托管静态资源
server.use(express.static('public'));
//使用body-parser中间件
server.use(bodyParser.urlencoded({
	extended:false
}));
//挂载路由
server.use('/user',userRouter);

