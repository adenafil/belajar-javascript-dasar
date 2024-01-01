// Membuat function dengan parameter dan return value
const sayHello = (firstName, lastName) => {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
};

const result = sayHello('Ade', 'Firmansah');
console.log(result);

const getScore = (value) => {
    if (value > 90) return 'A';
    if (value > 80) return 'B';
    if (value > 70) return 'C';
    if (value > 60) return 'D';
    return 'E';
}

console.log(getScore(90));

const isContains = (array, searchValue) => {
    for (const element of array) {
        if (element === searchValue) return true;
    }

    return false;
}

const arr = [1,2,3,4,5,6,7,8];

console.log(isContains(arr, 7));