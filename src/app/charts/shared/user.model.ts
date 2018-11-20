export class User{
    name: String
    age: number
    registered: Date

    constructor(name: String, age: number, registered: Date){
        this.name = name
        this.age = age
        this.registered = registered
    }
    
    toString() : String{
        return this.name + " is " + this.age + " years old - registered: "+this.registered
    }
}