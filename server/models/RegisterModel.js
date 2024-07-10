const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
      default:true
    }
  });

module.exports = mongoose.model('Users', userSchema);
