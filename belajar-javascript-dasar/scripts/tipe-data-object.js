const orang = {};

// Menambah atau Mengubah

orang['nama'] = 'Ade Nafil Firmansah';
orang['alamat'] = 'Indonesia';
orang['umur'] = '19'

console.table(orang);
console.log(orang.nama);

delete orang['alamat'];

console.log(orang);

const watchList = {
    anime: 'Dr. Stone',
    watched: false,
    year: 2022,
    'anime dari': 'japan datebayo'
}

console.log(watchList);
console.log(watchList["anime dari"]);

console.log(watchList.anime);
console.log(watchList.watched);
console.log(watchList.year);
console.log(watchList["anime dari"]);