console.log("starting app...");



const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require ('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

console.log('process:', process.argv);
console.log('yargs', argv);
var command = process.argv[2];
console.log('Command: ', command);

if(command === 'add'){
notes.addnote(argv.title, argv.body)
}
else if (command === 'list'){
    notes.getall();
}
else if (command ==='read'){
    notes.getnote(argv.title);
}
else if (command ==='remove'){
    notes.removenote(argv.title);
}
else{
    console.log("command not recognizezd");
}



//var res = notes.add(4, 5);

//console.log(res);
