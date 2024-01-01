let say = (name) => {
    console.log('Hello ' + name);
};

say('ade');

// const giveMeName = (callback) => {
//     callback('eko');
// };

// giveMeName((name) => {
//     console.log(`Hello ${name}`);
// });

function giveMeName(callback) {
    callback('eko', 22);
    console.log(callback);
}

giveMeName((name, umur) => {
    console.log(name + ' sudah berusia ' + umur);
});


