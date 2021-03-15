<<<<<<< HEAD
'use strict'

const array = ['spring', 'winter', 'car', 'a', 'in', 'politecnico'];

console.log(array);

for(let i=0; i<array.length; i++){
    if(array[i].length < 2){
        array[i] = "";
    }
    else{
        array[i] = array[i][0] + array[i][1] + array[i][array[i].length - 2 ] + array[i][array[i].length - 1];
    }
}

console.log(array);

//debugger;
=======
"use strict";

const name1 = ["spring", "winter", "summer", "a", "cia", "al"];

console.log(name1);

const reduction = (array) => {
    for (let i=0; i < array.length; i++) {
        if (array[i].length < 2) {
            array[i] = "";
        } else {
            array[i] = `${array[i][0]}${array[i][1]}${array[i][array[i].length-2]}${array[i][array[i].length-1]}`;
        }
    }
}

reduction(name1);

console.log(name1);
>>>>>>> 7e7c38e6c11cc88f1f29cf5c014c89ad99052f86
