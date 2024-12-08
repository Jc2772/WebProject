const mongoose = require('mongoose');
const ConStr = "mongodb+srv://james:gamehead@gamehead.jancw.mongodb.net/GameHead?retryWrites=true&w=majority&appName=GameHead";
require('./games');
require('./users');
const connectDB = async () =>{
    try{
        await mongoose.connect(ConStr,{ useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Mongose is Connected");
    }
    catch(err){
        console.log("Can not connect to the database");
    }
}
connectDB();