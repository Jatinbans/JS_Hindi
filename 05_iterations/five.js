const coding = ["js","ruby","java","python","cpp"]

//callback function -  function da naam nhi hunda because as a parameter milya
// coding.forEach(function (item) {
//     console.log(item);
// })


// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })



const myCoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "java",
        languageFilename: "java"
    },
    {
        languageName: "python",
        languageFilename: "py"
    }
]

myCoding.forEach((item)=>{

console.log(item.languageName);
})