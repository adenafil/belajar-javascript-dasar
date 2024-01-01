function sayHello(name) {
    console.log(`Hello ${name}`);
};

sayHello('ade');
const say = sayHello;
say('nafil');

function giveMeName(callback) {
    callback('ade');
}

giveMeName(say);
giveMeName(sayHello);