const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true,
      uppercase:true
    },
    email:{
      type:String,
      required:true,
      lowercase:true,
    },
    mobile:{
      type:Number,
      default:123456789
    }


});

// class mongoose model
const  Usermodel= new mongoose.model("Usermodel",UserSchema);
module.exports = Usermodel;