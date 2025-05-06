import { impname} from './impname.js'

const name = impname.fname

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please enter your input: ', (userInput) => {
    console.log('You entered: ' + userInput);
    readline.close();
    newEntry = name.push(userInput);
    comsole.log(newEntry);
  });

console.log(name);
