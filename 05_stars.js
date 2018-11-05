"use strict";
const readline = require('readline-sync');

const displayText = (text) => {
    let i = 0;
    let timer = setInterval(() => {
        process.stdout.write(text[i]);
        i++;

        if (i >= text.length) {
            clearInterval(timer);
        }
    }, 95);

};
let rows = readline.question("How many rows? ");
let columns = readline.questionInt("How many columns ");

let arr = [];

for(let i = 0; i < rows; i++) {
    arr[i] = [];

    for(let j = 0; j < columns; j++) {
        arr[i][j] = "*";
    }

    console.log(arr[i]);
}

