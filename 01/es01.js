'use strict'

const array = ['summer' , 'matricola' , 'd' , 'marmotta', 'to'];

//console.log(array);

for(let i=0; i<array.length; i++){
    if(array[i].length < 2){
        array[i] = "";
    }
    else{
        array[i] = array[i][0] + array[i][1] + array[i][array[i].length - 2 ] + array[i][array[i].length - 1];
    }
}

console.log(array);
debugger;