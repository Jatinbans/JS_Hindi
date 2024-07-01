//object bases getter setter
// _ underscore nal private kiti hoyi property

const User = {
    _email:"h@email.com",
    _password:"abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);