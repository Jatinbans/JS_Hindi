const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel.push(dc);                // same output for both concat and push
// console.log(marvel);
// marvel.concat(dc)
// console.log(marvel);

// const allheros = marvel.concat(dc) // concat returns new array 
// console.log(allheros);


//spread operator **important
const allhero = [...marvel,...dc]
console.log(allhero);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity) // values spread out from arrays in array
console.log(realAnotherArray);




console.log(Array.isArray("Jatin"));
console.log(Array.from("Jatin"));

console.log(Array.from({name: "jatin"})); // intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

// is,of, from pdho