import mongoose from "mongoose"

const DoctorSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  Salary:{
    type:Number,
    required:true,
  },
  Qualification:{
    type:String,
    required:true,
  },
  experenceInYear:{
    type:Number,
    required:true,
    default:0,
  },
  worksInHospital:[
    {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }
]
},{timestamps:true});

export const Doctor = mongoose.model("doctor",DoctorSchema);