const mongoose = require('mongoose');
require('../models/games');
const Review = mongoose.model('Game')
const reviewRead = function (req, res){
    Review
    .find()
    .then((reviews) => {
        if(reviews.length === 0){
            res
            .status(400)
            .json({
                "message":"Game Reviews are not found"
            });
        }
        else{
            res
            .status(200)
            .json(reviews)
        }
    })
    .catch((err) =>{
        res
            .status(500)
            .json(err)
    });
};


module.exports = {
    reviewRead
};