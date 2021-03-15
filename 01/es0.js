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
