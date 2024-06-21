// 2 types - primitive and non- primitive
//primitive -  call by value
// 7 types : String, Number, Boolean, null, undefined , symbol , BigInt


// dynamically typed language - js 
//non-primitive - refernece types
//arrays, objects, functions // return type - object 


const id = Symbol('123')
const id1 = Symbol('123')
console.log(id === id1);

const heros = ["shaktimn","nagraaj","doga"] // array
let myObj = {
    name: "jatin", // object
    age: 55
}


const myFunc = function(){
    console.log("hello");
}

console.log(typeof heros);


//-------------------------------------

//Memory 
/* Stack (Primitive) , Heap(non-primitive)*/

let mynane = "jatinbansal"
let anothername = mynane
anothername = "chaiPeelo"
console.log(mynane);
console.log(anothername);

let user1= {
    email: "user@gmail.com",
    upi: "@axis"
}

let user2 = user1

user2.email = "user2@gmail.com"

console.log(user1.email);
console.log(user2.email);