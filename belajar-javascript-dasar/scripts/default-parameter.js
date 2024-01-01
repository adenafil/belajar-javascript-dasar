function register(name, gender = 'UNKNOWN') {
    console.log(name);
    console.log(gender);
}

register('ade');
register('ade', 'MALE');
register('ade', undefined);