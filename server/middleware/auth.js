const { response } = require('express')
const jwt = require('jsonwebtoken')
const Register = require('../models/SignUpModels')

const auth = async (request, response, next) => {
    try {
        const token = request.cookies.jwt
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY)
        console.log(verifyUser);
        next();
    } catch (error) {
        response.status(401).send(error)
    }
}

module.exports = auth;