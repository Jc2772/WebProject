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
        type: Number,
        default:0
    }
});
Game = mongoose.model('Game',gameSchema);
module.exports = Game