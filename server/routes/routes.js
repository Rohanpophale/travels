const { request, response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')

router.post('/signin', async (request, response) => {

    const { username, password } = request.body

    // const saltPassword = await bcrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(request.body.password, 10)
    signUpTemplateCopy.findOne({ username: username }, (error, user) => {
        if (user) {
            if (password === user.password) {
                response.send({ message: user.name + " Logged In Successfully!" })
            }
            else {
                response.send({ message: "Incorrect Password!" })
            }
        }
        else {
            response.send({ message: username + " is not a Registered User!" })
        }
    })
})

router.post('/signup', async (request, response) => {

    // const saltPassword = await bcrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(request.body.password, 10)

    const { name, mobile, address, email, username, password } = request.body

    signUpTemplateCopy.findOne({ email: email } || { username: username }, (error, user) => {
        if (user) {
            response.send({ message: "User already registered!" })
        }
        else {
            const signedUpUser = new signUpTemplateCopy({
                name: request.body.name,
                mobile: request.body.mobile,
                address: request.body.address,
                email: request.body.email,
                username: request.body.username,
                password: request.body.password
            })
            signedUpUser.save()
                .then(data => {
                    response.send({ message: name + " Registered Successfully!" })
                })
                .catch(error => {
                    response.send({ message: error })
                })
        }
    })

})


module.exports = router