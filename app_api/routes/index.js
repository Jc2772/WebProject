const express = require('express');
const router = express.Router();
const ctrlReviews = require('../controllers/reviews');
const ctrlusers = require('../controllers/users')

router.get('/reviews',ctrlReviews.reviewRead)
router.post('/userSignUp',ctrlusers.UserSignUp)
router.post('/userSignIn',ctrlusers.UserSignIn)
module.exports = router
