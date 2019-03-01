//闭包 js 重点
// 闭包由来和js中变量的作用域有关
// 在js中变量作用域分为两种全部和局部
// 在函数内部可以访问全部变量,但是在函数外部不能访问到局部变量
// var aa = "card"; //全局变量

// function fun(){
//     var _aa = "serd"; //局部变量
//     console.log(aa); //调用全部变量
// }
// fun();
// console.log(_aa); //在函数外,调用局部变量 ,报错_aa is not defined,标识没有_aa 这个变量
//闭包就是用来解决在全局作用域中访问局部变量的问题;
function bibao(){
    var _aa= "serds";
    return function(){
         console(_aa);
    }
}
bibao;