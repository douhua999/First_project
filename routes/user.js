//引入express
const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建路由对象
var router=express.Router();
//添加路由
//1.登录
router.post("/login",(req,res)=>{
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
    if(!$uname){
      res.send("用户名错误");
      return;
    }
    if(!$upwd){
      res.send("密码错误");
      return;
    }
    var sql="select * from pc_user where uname=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
          if(err) throw err;
          if(result.length>0){
            res.send("1");
          }else{
            res.send("登录失败");
          }
    });
});
//2.注册
router.post("/regist",(req,res)=>{
	//获取数据
	var $uname=req.body.uname;
	//console.log($uname);
	var $upwd=req.body.upwd;
	//console.log($upwd);
	var $email=req.body.email;
	//console.log($email);
	var $phone=req.body.phone;
	//console.log($phone);
	var $real_name=req.body.real_name;
	//console.log($real_name);
	var $gender=req.body.gender;
	//console.log($gender);

	//验证数据
	if(!$uname){res.send("用户名不能为空"); return;}
	if(!$upwd){res.send("密码不能为空"); return;}
	if(!$email){res.send("电子邮箱不能为空"); return;}
	if(!$phone){res.send("手机号不能为空"); return;}
	if(!$real_name){res.send("真实姓名不能为空"); return;}
	if(!$gender){res.send("性别不能为空"); return;}
	
	var sql="insert into pc_user set ?";
	pool.query(sql,[req.body],(err,result)=>{
           if(err) throw err;
           if(result.affectedRows>0){		  
               res.send("注册成功");
           }
     });
});
//导出路由
module.exports=router;