const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    game:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    avgscore:{
        type: Double,
        default:0
    }
});
mongoose.model('Users',UserSchema)