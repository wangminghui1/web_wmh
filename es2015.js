//rest 函数传入多个函数
function add(...values){
    var sum = 0;
    for(let a in values){
        sum+=values[a];
    }
    console.log(sum);
}
add(1,2,3);

/**es6设置默认值 */
function remove(x,y=2){
    console.log(x,y);
}
remove(1);
remove(1,4);
remove(null);

//函数的name属性返回函数名
var cc = function(x,y=2){
    //当设置函数的参数的默认值时,函数的length失真
};
console.log("函数名:"+cc.name,cc.length);

//es引入箭头函数=>
function fooDemo(x,y){
    return x+y;
}
//箭头函数,代码体多余1行时,可以使用花括号括起来
(x,y)=>x+y;

var full = ({ first, last }) => first + ' ' + last;

// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}


// (function(window, undefined) {
// 	// 用一个函数域包起来，就是所谓的沙箱
//    	// 在这里边var定义的变量，属于这个函数域内的局部变量，避免污染全局
// 	// 把当前沙箱需要的外部变量通过函数参数引入进来
//    	// 只要保证参数对内提供的接口的一致性，还可以随意替换传进来的这个参数
// 	"use strict";
// 	window['jQuery'] = window.$ = jQuery;
// })();
// var cc = 100;

// cc == window.cc;