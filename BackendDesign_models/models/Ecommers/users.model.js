import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    lowercase:true,
    unque:true,
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    unque:true,
  },
  password:{
    type:String,
    required:true,
  },

},{timeStamp:true});

export const User = mongoose.model("User",userSchema)