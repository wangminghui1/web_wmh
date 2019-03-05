//异步编程的处理方法
// 1.js回调函数
// example 1 定时器模拟异步处理
 //一个定时器
  function timer(time, callback){
      setTimeout(function(){
          callback();
      }, time);
  }
  
  timer(3000, function(){
      console.log(123);
 });

 //读文件后输出文件内容
import { readFile } from 'fs';

readFile('./text1.txt', 'utf8', function(err, data){
    if (err){
        throw err;
    }
    console.log(data);
});