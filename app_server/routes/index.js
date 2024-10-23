const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
/* GET home page. */
router.get('/', ctrlMain.MainPage);
router.get('/SignIn', ctrlMain.SignIn);
router.get('/SignUp', ctrlMain.SignUp);
module.exports = router;
