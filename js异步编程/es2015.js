//es6新特性
// 1.箭头函数 =>

// var arr = [1,3,4];
// arr.forEach(v => console.log(v));

// arr.forEach(function(v,i,a){
//     console.log(v,i,a);
// })

// 2.加入了class

// function Demo(name = 10,age = 10){
//     this.name = name;
//     this.age = age;
// }

// var de = new Demo();
// // console.log(de)

// //es6
// class Demo1{
//     constructor(name = '王明辉'){
//         this.name = name;
//     }
//     sayName(){
//         console.log("我是"+this.name);
//     }
// }

// var d2 = new Demo1();

// d2.sayName();

// class Demof extends Demo1{
//     constructor(name){
//         super(name);
//     }
// }

// var a = new Demof("1");

// console.log("这是?"+JSON.stringify(a.sayName));

let ha = "10";
const ha1 = "20";
// ha1 = '2';
// console.log(ha,ha1);


// for (let i=0;i<2;i++)console.log(i);//输出: 0,1
// console.log(i);

// var a = 99;            // 全局变量a
// f();                   // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。 
// console.log(a);        // a=>99,  此时是全局变量的a
// function f() {
//   console.log(a);      // 当前的a变量是下面变量a声明提升后，默认值undefined
//   var a = 10;
//   console.log(a);      // a => 10
// }

// console.log(a);
// var a = 11;

// console.log(a);
// var a=1;
// console.log(a);
// function a(){console.log(2);}
// console.log(a);
// var a=3;
// console.log(a);
// function a(){console.log(4);}
// console.log(a);

// var a = 1;
// function fn1(a) {//把a作为参数传进来，但是并没有在他的局部作用域定义
//     console.log(a);//函数内预解析为a=undefined
//     a = 2;//后又将a改为2
// }
// fn1();
// console.log(a);//输出1，在全局中找到的a=1

var a=1;
function fn1(a){
console.log(a);//输出1
a=2;
}
fn1(a); //传的参数为var a=1;为局部的
console.log(a);//输出1，此1为全局var a=1;


obj = {
    name : "王明辉",
    age : 18
};

ander = {
    _proto : obj,
}

function fun(){

}
fun.

console.log(ander)