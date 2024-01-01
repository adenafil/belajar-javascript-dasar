// factorial loop

function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) result *= i;

    return result;
}

console.log(factorial(4));

function recursive(value) {

    console.log(value);
    
    if (value === 1) return 1;

    return value * recursive(value-1); // 4 * 3 * 2 * 1
}

console.log(recursive(5));