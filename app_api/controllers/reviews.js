const mongoose = require('mongoose');
const Review = mongoose.model('Game')
const reviewRead = function (req, res){
    Review
    .find({})
    .then((Game) => {
        if(!Game){
            res
            .status(400)
            .json({
                "message":"Game Reviews are not found"
            });
        }
        else{
            res
            .status(200)
            .json(Game)
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