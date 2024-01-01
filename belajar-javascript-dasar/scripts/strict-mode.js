'use strict'; // masuk pak eko
function useStrictMode() {
    const person = {
        firstName: 'Ade'
    }

    with (person) console.log(firstName);
}

useStrictMode();