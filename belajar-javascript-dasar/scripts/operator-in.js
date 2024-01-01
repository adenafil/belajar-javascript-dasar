const person = {
    firstName: 'ade',
    lastName: 'firmansah'
}

const result = 'firstName' in person;

if ('firstName' in person) console.log('Masuk Pak Eko');

console.log(result);

const orang = {
    lastName: 'Masuk Pak EKo'
};

const hasil = 'lastName' in orang;
console.log('hasil = ' + hasil);

const names = [null, 'nafil', 'firmansah'];
const nameResult = 0 in names;
console.log('nameResult = ' + nameResult);
