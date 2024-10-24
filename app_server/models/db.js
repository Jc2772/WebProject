const mongoose = require('mongoose');

const ConStr = "mongodb+srv://james:GameHead123@gamehead.jancw.mongodb.net/?retryWrites=true&w=majority&appName=GameHead";

const connectDB = async () =>{
    try{
        await mongoose.connect(ConStr,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Mongose is Connected")
    }
    catch(err){
        console.log("Can not connect to the database")
    }
}
connectDB()