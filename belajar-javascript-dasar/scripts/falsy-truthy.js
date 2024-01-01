function isFalsyOrTruthy(data) {
    if (data) 
        console.log('TRUE');
            else
                console.log('FALSE');
}

let data;
isFalsyOrTruthy(data);

data = '';
isFalsyOrTruthy(data);

data = false;
isFalsyOrTruthy(data);

data = 0;
isFalsyOrTruthy(data);

data = null;
isFalsyOrTruthy(data);

data = undefined;
isFalsyOrTruthy(data);

data = Number('ade');
isFalsyOrTruthy(data);

data = [];
isFalsyOrTruthy(data);

data = {};
isFalsyOrTruthy(data);


