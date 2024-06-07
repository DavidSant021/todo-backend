const mongoose = require('mongoose');

const { Schema } = mongoose

const taskSchema = new Schema({
    name: { type: String, required: true },
    done: { type: Boolean, default: false },
    checklist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checklist',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)