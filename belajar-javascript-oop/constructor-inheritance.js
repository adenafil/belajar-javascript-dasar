function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function() {
        console.log('Hi, i\'m employee, and my name is ' + firstName);
    }
}

function Manager(firstName, lastName) {
    Employee.call(this, firstName);
    this.lastName = lastName;
}

const joko = new Employee('joko');
joko.sayHello();
console.log(joko);

const jurgen = new Manager('Jurgen', 'Klopp');
console.log(jurgen);
jurgen.sayHello();