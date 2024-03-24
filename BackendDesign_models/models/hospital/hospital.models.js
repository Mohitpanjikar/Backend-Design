import mongoose from "mongoose"

const HospitalSchema = new mongoose.Schema({
  name:{
    type:string,
    required:true,
  },
  addressLine1:{
    type:string,
    requried:true,
  },
  addressLine2:{
    type:string,
  },
  city{
    type:string,
    required:true,
  },
  pincode:{
    type:String,
    required:true,
  },
  Specializedin:[{
    type:String,
    required:true,
  },
]
},{timestamps:true});

export const Hospital = mongoose.model("Hospital",HospitalSchema);