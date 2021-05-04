//make Object

let obj1= {a:true};
//pointer
let obj2= obj1;

obj1.a='booya'
delete obj1;
obj2 = 'hello'
//console.log('1',obj1);
console.log('2',obj2);