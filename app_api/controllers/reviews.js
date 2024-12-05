const mongoose = require('mongoose');
const Review = mongoose.model('Game');
const reviewShow = function (req, res){
    res
    .status(200)
    .json({"Review":"reviews retrieved"});
};


modelule.exports = {
    reviewShow
};