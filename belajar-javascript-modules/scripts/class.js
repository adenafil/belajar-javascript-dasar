export class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello My Name is ${this.name}`);
    }
}