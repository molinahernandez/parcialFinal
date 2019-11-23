const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    autor: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

model('note', noteSchema);  