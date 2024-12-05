const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
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
mongoose.model('Game',gameSchema)