const { request, response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const destinations = require('../models/destinationModels')
const bcrypt = require('bcryptjs')
const auth = require('../middleware/auth')

router.post('/signin', async (request, response) => {

    const { username, password } = request.body

    const user = await signUpTemplateCopy.findOne({ username: username })

    if (user) {
        const pass = await bcrypt.compare(password, user.password)
        if (pass) {
            const token = await user.generateAuthToken()
            response.cookie("usercookie", token, {
                expires: new Date(Date.now() + 9000000),
                httpOnly: true
            })
            const result = {
                user,
                token
            }
            response.send({ message: user.name + " Logged In Successfully!", status: 201, result })
        }
        else {
            response.send({ message: "Incorrect Password!" })
        }
    }
    else {
        response.send({ message: username + " is not a Registered User!" })
    }
})

router.post('/signup', async (request, response) => {

    const { name, mobile, address, email, username, password } = request.body

    const securePassword = await bcrypt.hash(password, 10)

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
                password: securePassword
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

router.get('/dashboard', auth, (request, response) => {
    response.send(request.rootUser)
})

router.get('/payment', auth, (request, response) => {
    response.send(request.rootUser)
})

router.get('/logout', (request, response) => {
    response.clearCookie('usercookie', {path: '/'})
    response.status(200).send('User logged out!')
})

router.get('/destinations', (request, response) => {
    destinations.find({}, (err, data) => {
        if(err) console.log(err)
        // console.log(data)
        response.send(data)
    })
})

module.exports = router