const mongoose = require('mongoose')

const destinationTemplate = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    }
})

module.exports = mongoose.model('destinations', destinationTemplate)