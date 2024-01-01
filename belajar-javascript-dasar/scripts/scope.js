let counter = 0; // Global scope

function hitMe() {
    // local scope

    counter++;
}

hitMe();
hitMe();

console.log(counter);

function first() {
    let firstVariabel = 'First';

    function second() {
        console.log(firstVariabel);
    }

    second();
}

first();