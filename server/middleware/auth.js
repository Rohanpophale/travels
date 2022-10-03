const { request, response } = require('express')
const jwt = require('jsonwebtoken')
const Register = require('../models/SignUpModels')

const auth = async (request, response, next) => {
    try {
        const token = request.cookies.usercookie;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY)
        console.log(verifyUser);
        const rootUser = await Register.findOne({_id: verifyUser._id, "tokens.token": token })

        if(!rootUser) {
            throw new Error ('User Not Found!')
        }
        request.token = token
        request.rootUser = rootUser
        request.userID = rootUser._id
        next();
    } catch (error) {
        response.status(401).send('Unauthorized: No token provided')
        // console.log(error)
    }
}

module.exports = auth;