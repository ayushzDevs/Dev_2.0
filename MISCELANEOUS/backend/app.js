// factory function

// function personmaker(name,age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//         },
//     };
//     return person;
// }

// let p1 = personmaker("ayush",21);
// p1.talk();
// let p2 = personmaker("shohini",20);
// p2.talk();









// constructor function -> it doesn't return anything, it is used with the 'new' keyword

function Person(name,age){
    const person = {
        name : name,
        age : age,
    }
};

Person.prototype.talk = function(){
            console.log(`my name is ${this.name} and my age is ${this.age}`);
        
};

let p1 = new Person("Ayush",21);
let p2 = new Person("Shohini",20);

