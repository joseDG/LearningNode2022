//const fs = require('fs');
//fs.writeFileSync('notes.txt', 'Mi nombre es Jose');

//fs.appendFileSync('notes.txt','I live in Ecuador');

const getNotes = require('./notes.js');
const msg = getNotes();
console.log(msg);