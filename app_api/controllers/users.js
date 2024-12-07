const mongoose = require('mongoose');
const User = mongoose.model('Users');

UserSignUp = function(req,res){
    User
    .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then((err,User) => {
        if(err){
            res
            .status(400)
            .json(err);
        }
        else{
            res
            .status(201)
            .json(User)
        }
    });
};
UserSignIn = function(req,res){
    if(req.params && req.body.user && req.body.password){
        User
        .findOne(req.body.user)
        .exec((err, user) => {
            if(!user){
                res	
                .status(404) 
                .json({	
                "message": "locationid not found"
                });
            }
            else if(req.body.password != user.password){
                res	
                .status(401) 
                .json({	
                "message": "Wrong Password"
                });
            }
            else if(err){
                res	
                .status(404) 
                .json(err); 
              return; 	
            }
            else{
                res		
                .status(200)
                .json(user);
            }
        })
    }
    else{
        res
        .status(404)
        .json({
            "Message":"User did not put in username/password"
        })
    }
}
modelule.exports = {
    UserCreate
}