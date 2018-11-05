"use strict";
// загружаем модуль из файла ./utils/random.js
// в rand попадает всё, что в этом файле сохранено в module.exports
const rand = require("./utils/random");
let phrases = ["Hello World", "Привет, Мир!", "Hi!", "What's up?"];


console.log(phrases[rand(0, phrases.length - 1)]);