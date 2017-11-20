/*var obj = {
    name:'Tejkaran'
};
var stringObj = JSON.stringify(obj);
coonsole.log(typeof stringObj);
console.log(stringObj);*/

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes12.json', originalNoteString)

var noteString = fs.readFileSync('notes12.json');

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);