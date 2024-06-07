const mongoose = require('mongoose');

const { Schema } = mongoose

const checklistSchema = new Schema({
    name: {type: String, required: true},
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
}, { timestamps: true })

module.exports = mongoose.model('Checklist', checklistSchema)