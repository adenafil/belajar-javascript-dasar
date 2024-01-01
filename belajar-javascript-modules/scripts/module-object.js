const firstName = 'Ade';
const middleName = 'Nafil';
const lastName = 'Firmansah';

function sayHello() {
    console.log(`Hello From ${firstName} ${middleName} ${lastName}`);
}

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello From ${this.name}`);
    }
}

export {firstName, middleName, lastName, sayHello, Person};