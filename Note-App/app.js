console.log('Starting app')

const fs = require('fs'); //store everything in fs
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
// var command= process.argv[2]
var command = argv._[0]
// console.log(command)
// console.log('Process',process.argv)
console.log('Yargs', argv)


if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Notes created')
    notes.logNote(note)
  } else {
    console.log('That title already exists')
  }
} else if (command === 'list') {
  var allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach((note) =>
    notes.logNote(note)
  )
} else if (command === 'read') { //reading
  var note = notes.getNote(argv.title)
  if (note) {
    console.log('Reading notes')
    notes.logNote(note)
  } else {
    console.log('Not found')
  }
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message)
} else {
  console.log('command not recognized')
}