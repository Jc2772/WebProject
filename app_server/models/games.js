const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
    game:String,
    description:String,
    avgscore:Double
})