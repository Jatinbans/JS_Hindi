// const name = "jatin"
// const repo = 50

// // console.log(name+repo+" value");

// //string interpolation `(backticks)`
// console.log(`Hello my name is ${name} and my repoCount is ${repo}`);

const gameName = new String('Jatin-hju')

// console.log(gameName[0]); //accessing key 
// console.log(gameName.__proto__); // object dekhna 

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // method 

console.log(gameName.charAt(1));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3) // doesnot obey negatives 
console.log(newString);

// const anotherString = gameName.slice(0,4)
// console.log(anotherString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);

const newString1 = "    hitesh    "
console.log(newString1.trim());
// trim start and trim end 

const url = "https://jatin.com/jatin%20bansal"
console.log(url.replace('%20', '-')) 

console.log(url.includes('jatin')); // true or false


console.log(gameName.split('-')); //arrray ch paya on the basis of - seperator

