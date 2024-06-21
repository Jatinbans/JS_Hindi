/* date object represent a single moment in time starts from 1 January 1970
dates are calculated in miliseconds
*/

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23,5,3)
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString());


//------------time-----------

let myTimeStamp = Date.now()
// console.log(myTimeStamp);  // miliseconds
// console.log(myCreateDate.getTime()); // miliseconds
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})