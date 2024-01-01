const person = {
    firstName: 'Ade',
    middleName: 'Nafil',
    lastName: 'Firmansah'
}

// console.log(person.firstName);
// console.log(person.middleName);
// console.log(person.lastName);

// with statement javaScript

// ambigu

const firstNmae = 'adeee';
const lastName = 'errorr';


with (person) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

// unrecommended useage