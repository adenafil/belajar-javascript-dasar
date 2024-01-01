const name = 'Ade Nafil Firmansah';
const firstName = 'Ade';
const middleName = 'Nafil';
const lastName = 'Firmansah';
const template = `Name : ${firstName} ${middleName} ${lastName}`;
const lama = 'nama ' + firstName + ' ' + middleName + ' ' + lastName;
const nilai = 80;

console.log(template);
console.log(lama);

const template2 = `Nama : ${name}, Lulus : ${nilai > 70}`;
console.log(template2);

let multiLineString = `
    Nama saya adalah ade nafil firmansah
    Hello World
    Hahahhahah
    test Aj
`;

console.log(multiLineString);