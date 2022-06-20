const { default: chalk } = require('chalk');
const fs = require('fs');

const getNotes = function (){
  return 'Your notes...'
}

const addNote = function (title, body){
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function(note){
    return note.title === title
  })
  if(notes){
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
  }else{
    console.log(chalk.red.inverse('Note title taken!'))
  }
}

const saveNotes = function(notes){
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('data/data.json', dataJSON)
}

const loadNotes = function(){
  try{
    const dataBuffer = fs.readFileSync('data/data.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  }catch(e){
    return []
  }
}

//Remove note
const removeNote = function(title){
  const notes = loadNotes()
  const notesToKeep = notes.filter(function(note){
    return note.title !== title
  })
  if(notesToKeep.length < notes.length){
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  }else{
    console.log(chalk.red.inverse('No note found!'))
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote
}