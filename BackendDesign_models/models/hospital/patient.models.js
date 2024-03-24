import mongoose from "mongoose"

const PatientSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  diagonsedwith:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  age:{
    type:Number,
    required:true,
  },
  BloodGroup:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    enum:["Male","Female"],
    required:true,
  },
  addmittedIN:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"hosptial",
  }

},{timestamps:true});

export const Patient = mongoose.model("Patient",PatientSchema);