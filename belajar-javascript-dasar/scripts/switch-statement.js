
let nilai = 'A';

switch (nilai) {
    case 'A':
        console.log('Wow Anda lulus dengan baik');
        break;
    case 'B':
    case 'C':
        console.log('Anda lulus');
        break;
    case 'D':
        console.log('Anda tidak lulus');
    default:
        console.log('Mungkin Anda salah jurusan');
}