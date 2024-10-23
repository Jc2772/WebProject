const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
/* GET home page. */
router.get('/', ctrlMain.MainPage);
router.get('/SignIn', ctrlMain.SignIn);
module.exports = router;
