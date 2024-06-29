//goal - string aa ik 

// let myName = "jatin           "
// console.log(myName.truelength);

let myheros = ["thor","spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.jatin = function(){
    console.log(`jatin is there in all`);
}
// heroPower.jatin()
Array.prototype.heybansal = function(){
    console.log(`hey bro`);
}

myheros.jatin()
myheros.heybansal()
// heroPower.heybansal()

// rk path de uper nu power deti sarre lowers kol jau gi

//inheritence

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable  : false

}

const TASupport = {
    makeAssignment : 'js Assignment',
    fullTime: true
    __proto__ : teachingSupport
    // proto nal kise hor object di properties da access mil janda
}