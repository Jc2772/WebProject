const mongoose = require('mongoose');
const User = mongoose.model('Users');

UserCreate = function(req,res){
    User
    .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then((err,User) => {
        if(err){
            res
            .status(402)
            .json(err);
        }
        else{
            res
            .status(201)
            .json(User)
        }
    });
};
User
modelule.exports = {
    UserCreate
}