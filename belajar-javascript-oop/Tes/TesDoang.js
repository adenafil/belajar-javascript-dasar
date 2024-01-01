class Employee {
    constructor(firstName) {
        this.aa = firstName;
    }

    sayHello() {
        console.log('Hello i\'m an employee and my name is ' + this.firstName);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName) {
        super(aa);
        this.lastName = lastName;
    }

    sayHello() {
        console.log('Hello i\'m an manager and my name is ' + this.aa);
    }
}

const employee = new Employee('ade');
employee.sayHello();
const manager = new Manager('nafil', 'firmansah');
manager.sayHello();
