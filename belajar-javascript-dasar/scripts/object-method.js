// const person = {
//     nama: 'Ade',
//     sayHello: name => console.log('Hello ' + name)
// }

// person.sayHello(person.nama);

const person = {
    name: 'Ade'
};

person.sayHello = name => console.log(name);

person.sayHello('ade');

console.log(person);