function* createNames() {
    yield 'Ade';
    yield 'Nafil';
    yield 'Firmansah';
}

const names = createNames();


for (const name of createNames()) {
    console.log(name);
}

function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 == 1) yield i;
    }
}

for (const odd of buatGanjil(100)) {
    console.log(odd);
}