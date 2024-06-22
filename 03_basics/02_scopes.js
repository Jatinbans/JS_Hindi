// global scope and block scope 
// global scope wali value availabe hundi hai block ch vi te scope de andr wali value bahr nhi jani chahidi 
let a = 300
// {} // scope if-else, function 
if(true){
let a = 10
const b = 20
var c = 30
console.log(a);
}

console.log(a);  
// console.log(b);  scope issue
// console.log(c);

