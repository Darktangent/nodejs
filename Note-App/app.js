console.log('Starting app')

const fs = require('fs'); //store everything in fs
const _ = require('lodash')
const yargs=require('yargs')

const notes = require('./notes.js')

const argv=yargs.argv
// var command= process.argv[2]
var command=argv._[0]
// console.log(command)
// console.log('Process',process.argv)
console.log('Yargs',argv)


if(command==='add'){
  var note=notes.addNote(argv.title, argv.body)
  if(note){
    console.log('Notes created')
    console.log('---------')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
  }else{
    console.log ('That title already exists')
  }
}else if(command==='list'){
notes.getAll()
}else if(command==='read'){
  notes.getNote(argv.title)
}else if(command==='remove'){
  var noteRemoved=notes.removeNote(argv.title)
  var message=noteRemoved ? 'Note was removed': 'Note not found'
  console.log(message)
}else{
  console.log('command not recognized')
}
