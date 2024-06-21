// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);


// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // fixed digit after decimal

// const otherNumber = 23.4857
// console.log(otherNumber.toPrecision(3)); // 5 to vdha ya chota chnages accordingly

// const hundered = 1000000
// // default US de according hundaa
// console.log(hundered.toLocaleString('en-IN'));


//------------Maths-----------------


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.7)); // roundOff

// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

console.log(Math.random()); // value is always betwwen 0 and 1
console.log(Math.random()*10+1); // always greater than 1 less then 0 


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);