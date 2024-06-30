// const des = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(des);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

//factory function

const chai = {
    name: 'ginger',
    price: 250,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai, 'name',{
//     writable: false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
    
}