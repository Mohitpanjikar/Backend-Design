import mongoose from "mongoose"


const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  complete:{
    type:Boolean,
    default:false,
  },
  createdBy:{
    type:mongoose.Schema.Typse.ObjectID,
    ref:"User",
  },
  subtodo:[
    {
    type:mongoose.Schema.Typse.ObjectID,
    ref:"SubTodo",
  }
]
},{tinmestamp:true});

export const ToDo = mongoose.model("Todo",todoSchema)