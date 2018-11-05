"use strict";
const rand = require("random");
let phrases = ["Hello World", "Привет, Мир!", "Hi!", "What's up?"];


console.log(phrases[rand.int(0, phrases.length - 1)]);