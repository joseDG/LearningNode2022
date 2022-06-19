//const fs = require('fs');
//fs.writeFileSync('notes.txt', 'Mi nombre es Jose');

//fs.appendFileSync('notes.txt','I live in Ecuador');

//const validator = require('validator');
import chalk from 'chalk';
const getNotes = require('./notes.js')

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('josethp1@gmail.com'));

const error = chalk.bold.red;
console.log(error);

console.log(chalk.blue('Hello world!'));