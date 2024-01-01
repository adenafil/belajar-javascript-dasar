const value1 = '1';
const value2 = 1;
const sum = parseInt(value1) + value2;

console.log(sum);

console.log(parseInt('1.1'));
console.log(parseFloat('1.1'));
console.log(Number('1.1'));

const a = 1;
const b = 1;
const total = a.toString() + b.toString();

console.log(total);

console.log(parseInt('salah'));
console.log(parseFloat('1.1text'));

// Number() tidak akan mentolerir kesalahan pada data

console.log(Number('1.1ups'));
console.log(Number('1x'));
console.log(Number('Bukan number'));

const nilai1 = Number('salah');
const nilai2 = 100;
const hasil = nilai1 + nilai2;

console.log(hasil);
console.log(isNaN(nilai1));
console.log(isNaN(nilai2));