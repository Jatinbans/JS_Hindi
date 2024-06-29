//proimise is object new kwyword nal instance mil janda
//creation of promies
const promise1 = new Promise(function(resolve,reject){
    // Do an async tasks
    //DB class, cryptography,network
    setTimeout(function(){
        console.log("async task completed");
        resolve()
    },1000)
})


//consumption of promise
//resolve has link with then

promise1.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})


const proimise3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"chai", email:"c@gmail.com"})
    }, 1000);
})

proimise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"jatin",password:"123"})
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})


promise4
.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log("The Promise is resolved or rejected");
})


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('Error: JS went wrong')
        }
    },1000)
});


async function consumePromise5(){
  try {
    const response = await promise5
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5()


// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E: ",error);
//    }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})