const mongoose = require('mongoose');

const DeleteuserSchema = new mongoose.Schema({
    fullName: String,
    username: String,
    email: String,
    phoneNumber: String,
    password: String,
    confirmPassword: String,
    gender: String,
    userType:String ,
    isActive:{
      type:Boolean,
      default:false
    }
  });

module.exports = mongoose.model('DelUsers', DeleteuserSchema);
