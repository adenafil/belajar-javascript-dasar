const outer = () => {

    function inner() {
        console.log('Inner');
    }

    inner();
    inner();
}

outer();