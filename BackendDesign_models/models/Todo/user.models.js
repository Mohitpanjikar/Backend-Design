import mongoose from "mongoose"

new userSchema = new mongoose.schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
  },
  password:{
    type:String,
    required:[true,"password is required"],
  },
  isActive:Boolean,
},{timestamps:true}
)

export const User = moongoose.model("User",userSchema)

//timestamp - created at,update at