// classes are a template for creating objects. 

// They encapsulate data with code to work on that data. 

// Classes in JavaScript are built on prototypes 
// but also have some syntax and semantics that are not shared with ES5 class-like functions.


class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    }
}

let p1 = new Person("Ayush",21);
let p2 = new Person("Shohini",20);