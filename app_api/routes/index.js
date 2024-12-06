const express = require('express');
const router = express.Router();
const ctrlReviews = require('../controllers/reviews');
const ctrlusers = require('../controllers/users')

router.get('/reviews',ctrlReviews.reviewShow)
router.get('/userSignUp',ctrlusers.UserSignUp)
router.get('/userSignIn',ctrlusers.UserSignIn)
router.get('/userSignOut',ctrlusers.UserSignOut)
modelule.exports(router)
