let arrayKosong = [];

let arrayNama = ['Ade', 'Nafil', 'Firmannsah'];

arrayKosong.push('masuk');
arrayKosong.push('pak');
arrayKosong.push('eko');
arrayKosong.push('bisa', 'juga', 'begini', 100);

console.table(arrayNama);
console.table(arrayKosong);

// change array

arrayNama[0] = 'adee'; // console index array
console.log(arrayNama[0]);

console.table(arrayNama);

delete arrayNama[0];

console.table(arrayNama);

console.log(arrayNama.length);

arrayNama[0] = 'ade';
console.table(arrayNama);

const arrayDidalamArray = [];
arrayDidalamArray.push(arrayKosong, arrayNama);

console.table(arrayDidalamArray);
console.log(arrayDidalamArray[0][0]);
console.log(arrayDidalamArray[1][0]);
