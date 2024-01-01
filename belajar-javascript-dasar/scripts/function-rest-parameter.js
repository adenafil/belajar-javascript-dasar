function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }

    console.log(`total ${name} is ${total}`);
};

sum('Orange', 2,2,2,2,2,2);
sum('Mango', 3,3,3,3,3,3,3);

const arr = [1,2,3,4,4,4,5,55,5,5];

sum('Eko', ...arr);

function oldSum() {
    let total = null;

    console.log(arguments);

    for (const item of arguments) total += item;

    return total;
}

console.log(oldSum(1,1,1,1,1,1,1,1));