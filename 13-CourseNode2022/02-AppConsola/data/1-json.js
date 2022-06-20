const fs = require('fs')

const dataBuffer = fs.readFileSync('../data/data.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Mike';
user.age = 30;

const userJSON = JSON.stringify(user);
fs.writeFileSync('data.json', userJSON);