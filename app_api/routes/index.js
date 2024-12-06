const express = require('express');
const router = express.Router();
const ctrlReviews = require('../controllers/reviews');
const ctrlusers = require('../controllers/users')

router.get('/reviews',ctrlReviews.reviewShow)
router.get('/users',ctrlusers)
modelule.exports(router)
