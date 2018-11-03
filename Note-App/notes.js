console.log('Starting notes.js')
const fs=require('fs')


var fetchNotes=()=>{
  try{
    var noteString=fs.readFileSync('notes-data.json')
    return notes=JSON.parse(noteString)

  }catch(e){
  return []
  }

}
var saveNotes=(notes)=>{
fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}

var addNote=(title,body)=>{
// console.log('adding note', title,body)
var notes=fetchNotes()
var note={
  title,
  body
}

//check duplicate title
var duplicateNotes=notes.filter((note)=>{
  return note.title===title
})
if(duplicateNotes.length===0){
  notes.push(note)
  saveNotes(notes);
  return note
}
}
var getAll=()=>{
  console.log('Getting all notes')
}

var getNote=(title)=>{
  console.log('Reading note',title)
}
var removeNote=(title)=>{
  //get the note
  var notes=fetchNotes()
  //now the notes contain all the existing notes
  //find the one that was passed in the argument of the function
  var filteredNotes=notes.filter((note)=> notes.title!==title)
    //save the new array
    saveNotes(filteredNotes)
    return notes.length !==filteredNotes.length
}

module.exports={
  addNote,
  getAll,
  getNote,
  removeNote
}
