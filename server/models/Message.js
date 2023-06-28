const mongoose = require('../controller/connect')

const MessageSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isAi: {
        type: Boolean,
        required: true,
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('messages', MessageSchema)