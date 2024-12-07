const mongoose = require('mongoose');
const Review = mongoose.model('Game');
const reviewRead = function (req, res){
    Review
    .find()
    .then((reviews) => {
        if(!reviews){
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