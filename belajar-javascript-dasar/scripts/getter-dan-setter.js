const person = {
    firstName: 'Ade',
    lastName: 'Firmansah',
    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter
    set fullName(val) {
        const arr = val.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
    }
}

person.fullName = 'Adeee Nafilll';

console.log(person.fullName);