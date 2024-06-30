
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}


const jatinn = new User("jatin")
// console.log(jatinn.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email

    }
}

const iPhone = new Teacher("iPhone","i@phone.com")

iPhone.logMe();
console.log(iPhone.createId());