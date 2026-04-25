function personmaker(name,age){
    const person = {
        name:name,
        age:age,
        talk(){
            console.log(`My name is ${this.name} and I am ${this.age} years old.`);
        },
    };
    return person;
}

let p1 = personmaker("ayush",21);
p1.talk();
let p2 = personmaker("shohini",20);
p2.talk();