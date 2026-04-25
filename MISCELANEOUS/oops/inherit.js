// inheritance is a mechanism that allows us to create new classes
// on the basis of existing classes. 

// The new class is called a subclass (or child class) and
//  the existing class is called a superclass (or parent class).

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    }
}



class Student extends Person{
    constructor(name,age,marks){
        super(name,age); //parent class contructor is being called here
        this.marks = marks;
    }
}



class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age); //parent class contructor is being called here
        this.subject = subject;
    }
}


let stu1 = new Student("Ayush",21,98);
let teacher1 = new Teacher("Shohini",20,"Maths");


// another example of inheritance

class Mammal{
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("Iam eating")
    }
}



class Dog extends Mammal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        console.log("wooff...");
    }
    eat(){
        console.log("Dog is eating"); //overwrites the eat method of parent class
    }
}


class Cat extends Mammal{
    constructor(name,color){
        super(name);
        this.color = color;
    }
    meow(){
        console.log("meow...");
    }
}