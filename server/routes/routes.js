const { request, response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
// const loginTemplateCopy = require('../models/loginModels')
const bcrypt = require('bcrypt')

// router.post('/signin', async(request, response) => {

//     // const saltPassword = await bcrypt.genSalt(10)
//     // const securePassword = await bcrypt.hash(request.body.password, saltPassword)
//     User.findOne({password : loginTemplateCopy.password}, (error, user) => {
//         if(user) {
//             if (request.body.password === loginTemplateCopy.password) {
//                 response.send({message: "Login Successful!", user: user})
//             }
//             else {
//                 response.send({message: "Incorrect Password!"})
//             }
//         }
//         else {
//             response.send("User NOT Registered!")
//         }
//     })
// })

router.post('/signup', async (request, response) => {

    // const { name, mobile, address, email, username, password } = request.body
    // User.findOne({ email: email} || {username : username }, (error, user) => {
    //     if (user) {
    //         response.send({ message: "User already registered!" })
    //     }
    //     else {
    //         const user = new User({
    //             name,
    //             mobile,
    //             address,
    //             email,
    //             username,
    //             password
    //         })

    //         user.save(error => {
    //             if (error) {
    //                 response.send(error)
    //             }
    //             else {
    //                 response.send(data)
    //             }
    //         })
    //     }
    // })

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

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
            response.send({ message: "User Registered Successfully!" })
        })
        .catch(error => {
            response.send({ message: error })
        })
})


module.exports = router