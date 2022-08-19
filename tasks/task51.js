class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayName() {
        console.log(this.name)
    }
}


let igor = new User('igor', 28)
igor.sayName()
console.log(typeof (User))



class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    sayName(){
        console.log(this.name)
    }
    sayType(){
        console.log(this.type)
    }
}

const filin = new Animal('Filya','Own')
console.log(filin)
filin.sayType()




