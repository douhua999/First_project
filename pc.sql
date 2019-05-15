#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS pc;
#创建数据库，设置存储的编码
CREATE DATABASE pc CHARSET=UTF8;
#进入该数据库
USE pc;
#创建数据表pc_user
CREATE TABLE pc_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  real_name VARCHAR(32),     
  gender INT              
);
#插入数据
INSERT INTO pc_user VALUES
(NULL, 'ding', '123456', 'ding@qq.com', '13501234567','叮叮', '1'),
(NULL, 'dang', '123456', 'dang@qq.com', '13501234568','铛铛', '1'),
(NULL, 'dou', '123456', 'dou@qq.com', '13501234569','豆豆', '1'),
(NULL, 'ya', '123456', 'ya@qq.com', '13501234560','丫丫', '0'),
(NULL, 'du', '123456', 'duy@qq.com', '13501234560','嘟嘟', '0'),
(NULL, 'dong', '123456', 'dong@qq.com', '13501234560','咚咚', '0');

