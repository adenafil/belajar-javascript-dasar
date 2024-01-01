console.log('hello' || '');
console.log('' || []);
console.log('0' || 'NOL');
console.log(0 || 'NOL');
console.log(null || 'NULL');
console.log(undefined || 'UNDEFINED');
console.log(undefined || null);

const person = {
    firstName: 'ade',
    lastNane: 'firmansah'
}

const nama = person.firstName || person.lastNane;

console.log(nama);

console.log('======&&===========\n');

console.log('hello' && ''); // ''
console.log('' && []); // ''
console.log('0' && 'NOL');
console.log(0  && 'NOL');
console.log(null && 'NULL');
console.log(undefined && 'UNDEFINED');
console.log('UNDIFINED' && 'NULL');
console.log(false && 0);
