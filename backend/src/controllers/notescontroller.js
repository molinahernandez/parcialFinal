const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNote = (req, res) => {
    const {title, content, date, autor} = req.body;
    new Note({
        title: title,
        content: content,
        date: date,
        autor: autor
    })
    console.log(newNote)
    res.json({Message: 'car saved'})
};

notesCtrl.getNote = (req, res) => res.json({title: 'car'})

notesCtrl.updateNote = (req, res) => res.json({Message:'car update'})

notesCtrl.deleteNote = (req, res) => res.json({Message:'car delete'})

module.exports = notesCtrl;