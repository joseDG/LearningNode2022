const { default: chalk } = require('chalk');
const fs = require('fs');

//Add note
const addNote =  (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.find((note) => note.title === title)

  if(!duplicateNotes){
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

//Remove note
const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  if(notesToKeep.length < notes.length){
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  }else{
    console.log(chalk.red.inverse('No note found!'))
  }
}

//Create List notes
const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.inverse('Your notes: '))

  notes.forEach((note) => {
    console.log(note.title)
  });
}

//Create read note
const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
      console.log(chalk.inverse(note.title))
      console.log(note.body)
  } else {
      console.log(chalk.red.inverse('Note not found!'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('data/data.json', dataJSON)
}

const loadNotes = () =>{
  try{
    const dataBuffer = fs.readFileSync('data/data.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  }catch(e){
    return []
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}