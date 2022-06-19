//const fs = require('fs');
//fs.writeFileSync('notes.txt', 'Mi nombre es Jose');

//fs.appendFileSync('notes.txt','I live in Ecuador');

const validator = require('validator');
const getNotes = require('./notes.js');
const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('josethp1@gmail.com'));
