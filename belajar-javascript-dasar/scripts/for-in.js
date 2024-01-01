const person = {
    firstName: 'Ade',
    middleName: 'Nafil',
    lastName: 'Firmansah'
}

for (const property in person) {
    console.log(`Property ${property} : ${person[property]}`);
}

const names = ['Ade', 'Nafil', 'Firmansah'];

for (const index in names) console.log('index : ' + index + ' : ' + names[index]);