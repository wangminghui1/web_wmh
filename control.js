// //冒泡排序分析
// //在数组当前用前者数字与相邻后者元素比较,大的数字放在后面,知道所有元素比较结束
// //开始新一轮比较
// //每一轮比较到最后的肯定为最大的,所以循环时需要减去已经排过的次数
//对于基本顺序已经差不多的数组来说,这样循环到底后面的排序时多余的

var arr = [3, 41, 68, 24, 6,2,44,22,24];
var m = 0;
function compToMp(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            m++;
            var flag = 0;
            if(array[j] < array[j+1]){
                var tmp = array[j];
                //赋值,前,后两者对调
                array[j] = array[j+1];
                array[j+1]=tmp;
                flag = 1;
            }
            
        }    
        if(flag == 0){
            return;
        }
    }
    console.log(array +",次数:"+m);
}

compToMp(arr);

// using __proto__
// var obj = {};
// var descriptor = Object.create(null); // no inherited properties

// //所有描述符的属性被设置为默认值
// descriptor.value = 'static';
// Object.defineProperty(obj, 'key', descriptor);

// //明确设置每个描述符的属性
// Object.defineProperty(obj, 'key', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: 'static'
// });
// console.log(obj.key.enumerable);

// var bb = obj;
// bb.key = "王明辉";
// console.log(obj.key);

// var aa = {
//     key : "static"
// }
// console.log(aa.key);

// var cc = aa;
// cc.key = '王明辉';
// console.log(aa.key);