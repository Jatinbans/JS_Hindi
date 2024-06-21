// objects
// declare - 2 ways (literals - nal singleton nhi banda), (constructor - always singleton)
//singleton - koi constructor to bnane aa ta ik hi banda mtlb eh avde tarike da ik hi object aa
// Object.create - singleton (constructor)\

// object literals
//keys - values

const mySym = Symbol("key1")
const jsUser = {
    name: "jatin",
    "full name" : "jatin bansal",
    [mySym]: "mykey1",
    age: 18,
    location: "muktsar",
    email: "ja@gmail.com",
    isloggedin: false,
    lastLogindays: ["monday","satruday"]
}

console.log(jsUser.age); //. nal string tra den di lod nhi
console.log(jsUser["email"]); // as a string dena penda
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

// values chnage na hon 
jsUser.email = "jb@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "ba@gmail.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");
}
// same object nu reference krna jdo odo apa this keyword use krde hai 
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting); //  function run nhi hoya odi refernce aayi aa
console.log(jsUser.greetingTwo()); // run hogya but nal undefiend aaya 