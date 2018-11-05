"use strict";

let lang = "--en";

if (typeof process.argv[2] !== "undefined") {
    lang = process.argv[2];
}

let greetings = {
  "--en" : "Hello World!",
  "--ru" : "Привет, мир!",
  "--de" : "Hallo Welt!",
  "--es" : "Hola Mundo!"
};

if (typeof greetings[lang] !== "undefined") {
    console.log(greetings[lang]);
} else {
    console.log(`Нет приветствий на языке "${lang}"`);
}