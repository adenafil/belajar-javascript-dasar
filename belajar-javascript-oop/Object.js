function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function() {
        console.log(`Hello all, my name is ${this.firstName} ${this.lastName}`);
    }
}

const ade = new Person();
ade.firstName = 'ade';
ade.lastName = 'firmansah';
const nafil = new Person();
nafil.firstName = 'nafil';
nafil.lastName = 'firmansah';

// langsung isi
const jailani = new Person('Jailani', 'Ngopi');
console.log(jailani);
jailani.sayHello();

console.log(ade);
console.log(nafil);
ade.sayHello();
nafil.sayHello();