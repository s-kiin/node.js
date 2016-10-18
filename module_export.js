//module.exports是真正的接口，exports只不过是它的辅助工具。推荐使用exports导出，除非你打算从原来的“实例化对象”改变成一个类型。
//两个变量保存了  !!!<对象的引用>  (改变对象的值 都会改变)
module.exports.name =  "haha";
exports.name = "nihao";

console.log(module.exports);
console.log(exports);

//对exports进行重新赋值
exports = {name : "0.0"};
console.log(exports);
//不会影响到require的对象 module.exports.name
console.log(module.exports);