const mongoose = require('mongoose')
const Reviews = mongoose.model('Game')

const reviewRead = async function (req, res){
    try{
        const reviews = await Reviews.find()
        if(reviews === 0){
            res
            .status(404)
            .json({
                "message":"Game Reviews are not found"
            });
        }
        else{
            res
            .status(200)
            .json(reviews);
        }
    }
    catch(err){
        res
            .status(500)
            .json(err);
    }
};
module.exports = {
    reviewRead
};