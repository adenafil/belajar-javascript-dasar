// // // // const names = ['Ade', 'Nafil', 'Firmansah', 'Programmer', 'Web'];
// // // // // const firstName = names[0];
// // // // // const middleName = names[1];
// // // // // const lastName = names[2];

// // // // // console.log(firstName);
// // // // // console.log(middleName);
// // // // // console.log(lastName);

// // // // const [firstName, middleName, lastName, ...others] = names;

// // // // console.log(firstName);
// // // // console.log(middleName);
// // // // console.log(lastName);
// // // // console.log(others[0]);
// // // // console.log(others[1]);

// // // const person = {
// // //     firstName: 'Ade',
// // //     lastName: 'Firmansah',
// // //     address: {
// // //         street: 'Jensud',
// // //         city: 'Berau',
// // //         country: 'Indonesia'
// // //     },
// // //     hobby: 'Coding',
// // //     channel: 'Ade Nafil Firmansah'
// // // }

// // // // console.log(person.address.street);

// // // const {lastName, firstName, address: {street, city, country}, ...others} = person;
// // // // const {street, city, country} = address;

// // // console.log(firstName);
// // // console.log(lastName);
// // // // console.log(address);
// // // console.log(others);

// // // console.log(street);
// // // console.log(city);
// // // console.log(country);

// // // console.log(others.hobby);

// // function displayPerson({firstName, middleName, lastName}) {
// //     console.log(firstName);
// //     console.log(middleName);
// //     console.log(lastName);
// // }

// // const person = {
// //     firstName: 'Ade',
// //     middleName: 'Nafil',
// //     lastName: 'Firmansah'
// // }

// // displayPerson(person);

// // function cetakArray([firstName, middleName, lastName]) {
// //     console.log(firstName);
// //     console.log(middleName);
// //     console.log(lastName);
// // }

// // const namas = ['Ade', 'Nafil', 'Firmansah'];

// // cetakArray(['Ade', 'Nafil', 'Firmansah']);

// // function sum([first, second, name]) {
// //     console.log(name);
// //     return first + second;
// // }

// // let a = [1, 2, 'ade'];

// // console.log(sum(a));

// // const arrNames = ['Ade', 'Nafil'];

// // const [firstName, middleName, lastName = 'Firmansah'] = arrNames;

// // console.log(firstName);
// // console.log(middleName);
// // console.log(lastName);

// const person = {
//     firstName: 'Ade',
//     lastName: 'Firmansah'
// }

// const {firstName, middleName = 'Nafil', lastName} = person;

// for (const item in person) {
//     console.log(person[item]);
// }

// console.log(person);

const person = {
        firstName: 'Ade',
        lastName: 'Firmansah'
    }
    

const {
    firstName: namaDepan,
    middleName: namaTengah = 'Nafil',
    lastName: namaBelakang
} = person;

console.log(namaDepan);
console.log(namaTengah);
console.log(namaBelakang);

console.log(person);