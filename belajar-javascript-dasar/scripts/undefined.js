let name;

if (name === undefined)
    console.log('UNDEFINED');
        else
            console.log('DEFINED');


const names = ['ade', 'nafil'];

delete names[0];

if (names[0] === undefined)
    console.log('UNDEFINED');
        else
            console.log('DEFINED');

let person = {};

if (person.name === undefined)
    console.log('UNDEFINED');
        else
            console.log('DEFINED');


const orang = {
    nama: 'ade',
    umur: 19
}

const tes = [person, orang, orang];

console.table(tes);

console.log(tes[1].nama);