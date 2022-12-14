const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const signUpTemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

signUpTemplate.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
            expiresIn: "1d"
        })

        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token
    } catch (error) {
    }
}

const User = mongoose.model('registration', signUpTemplate)
module.exports = User