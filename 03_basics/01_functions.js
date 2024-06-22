
// function sayMyName(){
//     console.log("j");   // this is function defination

// }


// // sayMyName // function reference
// //() execution 

// // sayMyName()


// //function di defination ch ande aa perimeters(input)
// // function addtwoNum(num1,num2){
// //     console.log(num1 + num2);

// // }

// function addtwoNum(num1,num2){
//    let result = num1+num2
//    return result

// }
// const result = addtwoNum(4,5)
// console.log("result: ", result);
// //calling time te arguments
// addtwoNum(4,5) // argument 

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in `
// }

// // console.log(loginUserMessage("jatin"))

// console.log(loginUserMessage()) // undefined


function calculatecartPrice(...num1){  // rest operator array vich patia sarria values
    return num1
}

console.log(calculatecartPrice(2,400,600));

const user = {
    username: "jatin",
    price: 299
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price:455
// })


const array = [200,400,500]
function secondValue(getArray){
    return getArray[2]
}
// console.log(secondValue(array));

console.log(secondValue([200,400,500]));