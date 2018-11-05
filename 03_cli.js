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

let name = readline.question("What's your name? \n");
console.log("Hi, " + name);

let age = readline.questionInt("How old are you? \n");

if (age >= 18) {
    displayText("Welcome, " + name);
} else {
    displayText("Go away, " + name);
}