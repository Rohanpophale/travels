const { request, response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const destinations = require('../models/destinationModels')
const bcrypt = require('bcryptjs')
const auth = require('../middleware/auth')
const formidable = require('formidable')
const { v4: uuidv4 } = require('uuid')
const https = require('https')
require('dotenv').config()
const PaytmChecksum = require('../PaytmChecksum')

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

router.post('/callback', (req, res) => {

    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, file) => {

        paytmChecksum = fields.CHECKSUMHASH;
        delete fields.CHECKSUMHASH;

        var isVerifySignature = PaytmChecksum.verifySignature(fields, process.env.PAYTM_MERCHANT_KEY, paytmChecksum);
        if (isVerifySignature) {

            var paytmParams = {};
            paytmParams["MID"] = fields.MID;
            paytmParams["ORDERID"] = fields.ORDERID;

            /*
            * Generate checksum by parameters we have
            * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
            */
            PaytmChecksum.generateSignature(paytmParams, process.env.PAYTM_MERCHANT_KEY).then(function (checksum) {

                paytmParams["CHECKSUMHASH"] = checksum;

                var post_data = JSON.stringify(paytmParams);

                var options = {

                    /* for Staging */
                    hostname: 'securegw-stage.paytm.in',

                    /* for Production */
                    // hostname: 'securegw.paytm.in',

                    port: 443,
                    path: '/order/status',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };

                var response = "";
                var post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });

                    post_res.on('end', function () {
                        let result = JSON.parse(response)
                        if (result.STATUS === 'TXN_SUCCESS') {
                            //store in db
                            db.collection('payments').doc('mPDd5z0pNiInbSIIotfj').update({ paymentHistory: firebase.firestore.FieldValue.arrayUnion(result) })
                                .then(() => console.log("Update success"))
                                .catch(() => console.log("Unable to update"))
                        }

                        res.redirect(`http://localhost:3000/status/${result.ORDERID}`)

                    });
                });

                post_req.write(post_data);
                post_req.end();
            });

        } else {
            console.log("Checksum Mismatched");
        }

    })

})

router.post('/payment', (request, response) => {

    const { amount, email } = req.body;

    /* import checksum generation utility */
    const totalAmount = JSON.stringify(amount);

    var params = {};

    /* initialize an array */
    params['MID'] = process.env.PAYTM_MID,
        params['WEBSITE'] = process.env.PAYTM_WEBSITE,
        params['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
        params['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
        params['ORDER_ID'] = uuidv4(),
        params['CUST_ID'] = process.env.PAYTM_CUST_ID,
        params['TXN_AMOUNT'] = totalAmount,
        params['CALLBACK_URL'] = 'http://localhost:4000/app/callback',
        params['EMAIL'] = email,
        params['MOBILE_NO'] = '9876543210'

    /**
    * Generate checksum by parameters we have
    * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
    */
    var paytmChecksum = PaytmChecksum.generateSignature(params, process.env.PAYTM_MERCHANT_KEY);
    paytmChecksum.then(function (checksum) {
        let paytmParams = {
            ...params,
            "CHECKSUMHASH": checksum
        }
        res.json(paytmParams)
    }).catch(function (error) {
        console.log(error);
    });
})

router.get('/logout', (request, response) => {
    response.clearCookie('usercookie', { path: '/' })
    response.status(200).send('User logged out!')
})

router.get('/destinations', (request, response) => {
    destinations.find({}, (err, data) => {
        if (err) console.log(err)
        // console.log(data)
        response.send(data)
    })
})

module.exports = router