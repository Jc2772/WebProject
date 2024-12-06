const mongoose = require('mongoose');
const Review = mongoose.model('Game');
const reviewRead = function (req, res){
    Review
    .find()
    .then((Review,err) => {
        if(!Review){
            res
            .status(400)
            .json("Game Reviews are not found");
        }
        else if (err){
            res
            .status(401)
            .json(err)
        }
        else{
            res
            .status(200)
            .json(Review)
        }
    });
};


modelule.exports = {
    reviewRead
};