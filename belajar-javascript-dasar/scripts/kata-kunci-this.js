// console.log(this);

const person = {
    name: 'Ade',
    sayHello: function(name) {
        console.log(`Saya ${this.name}, salam kenal ya ${name}`);
    }
}

person.sayHello('Napil');