//object literals
// const user = {
//     username: "jatin",
//     loginCount: 8,
//     signedin : true,


//     getuserDetails: function(){
//         console.log(this);
//         // console.log("got user details");
//         // console.log(`Username ${this.username}`);
       
//     }

// }

// // console.log(user.username);
// // console.log(user.getuserDetails);

// // console.log(this);


//new - constructor function aa - ik object literal to multiple instances

function User(username,loginCount,isloggedin){
    //left side variable and right side value pass krn wali
    this.username = username
    this.loginCount = loginCount
    this.isloggedin = isloggedin

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    // return this (implicitly define hunda hai)
}


const user1 = new User("jatin", 12,true)
const user2 = new User("chai aur code", 12, false)
console.log(user2);

// new - empty object create hunda jinu instance khende aa 
// constructor function call hunda new keyword di wajah nal- jine vi apne arguments hai ohna andr pack krda te de dinda
//this keyword nal arguments ode andr inject ho jande aa 
// function ch mil jande aa
