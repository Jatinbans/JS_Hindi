// // global scope and block scope 
// // global scope wali value availabe hundi hai block ch vi te scope de andr wali value bahr nhi jani chahidi 
// let a = 300
// // {} // scope if-else, function 
// if(true){
// let a = 10
// const b = 20
// var c = 30
// console.log(a);
// }

// console.log(a);  
// // console.log(b);  scope issue

// // console.log(c);



// // DOM - document object model html ke page ko manipulate kiya jata hai js ke through 

// // clousre - jo andr ka function hai woh bahrke variables ko access kr pata hai 
// // in nested funtions child functions can access parent variables 
 


// function one(){
//     const username = "jatin"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }

// one()


if(true){
    const username = "jatin"
    if(username === "jatin"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); error due to outside of scope 
}

// console.log(username); same error 


//------------intersting-----------

console.log(addone(5));

function addone(num){
    return num + 1
}



// experssion  hold and declare function (hoisting)
addTwo(5)
const addTwo = function(num){ 
    return num + 2
}

