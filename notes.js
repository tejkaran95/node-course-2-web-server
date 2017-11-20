 
 console.log('starting notes.js');

 const fs = require('fs');

 var addnote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    try{
 var noteString = fs.readFileSync('notes-data.json');
 notes = JSON.parse(noteString); 
    } catch(e)
    {

    }
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

 };

 var getall = () => {
     console.log('getting ll notes');
 }

 var getnote = (title) => {
     console.log('getting note', title);
 }

 var removenote = (title) => {
     console.log('removing note', title);
 }

 module.exports = {
     addnote,
     getall,
     getnote,
     removenote
 };