// const sayHello = (name) => console.log('Hello ' + name);

const sayHello = name => console.log(name);

sayHello('Ade');

const sum = (first, second) => first + second;

console.log(sum(1,1));

function giveMeName(callback) {
    callback('nafil');
}

giveMeName(name => console.log(name));