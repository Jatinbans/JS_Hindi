
// current context(values) lyi this keyword use hunda 
// const user = {
//     username : "hitesh",
//     price: 1222,

//     welcomeMsg : function(){
//         console.log(`${this.username}, welcome to website`);
//         // console.log(this);
//     }
// }

// user.welcomeMsg()
// user.username = "Sam"
// user.welcomeMsg()


// console.log(this);  node de andr this refer to empty coz global de ander koi conext nhi hai 
// kyoki engine alag alag aa 
// browser de andr jo global object hai oh window object hai 

//--------------arrow function ------------------

// function chai(){
//     let username = "jatin"
//     console.log(this.username); // function de andr this nhi use hunda

// }

// chai()


// const chai = () =>{
//     let username = "jatin"
//     console.log(this);
// }

// chai()

// syntax of arrow function 
// () => {}

    // explicit return 
    // const addTwo = (num1,num2) =>{
    //     return num1+num2
    // }

    // console.log(addTwo(4,5));


    // implicit return 
    //{} eh use krn nal return keyword likhna must aa  te () ede nal lod nhi 
    // const addTwo = (num1,num2) =>  num1+num2
    // const addTwo = (num1,num2) => (num1+num2) 
    
    // console.log(addTwo(4,5));


  