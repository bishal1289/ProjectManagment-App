const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;


const connect = async () => {
    await mongoose.connect(MONGO_URI).then(() => {
      console.log("DB connected");
    }); 
}

module.exports  = {connect}