class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,passowrd){
        super(username)
        this.email=email
        this.passowrd = passowrd
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@gmail.com","123")

chai.addCourse();

const masalaChai = new User("masalaChai")

masalaChai.logMe()



// console.log(chai === Teacher); // instance aaya ethe ek exact ohi nhi aaya


console.log(chai instanceof User);  // true
