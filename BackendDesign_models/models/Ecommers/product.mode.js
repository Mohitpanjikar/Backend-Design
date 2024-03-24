import mongoose from "mongoose"

const productSchema = new mongoose.schema({
  description:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  productImage:{
    type:String,
  },
  price:{
    type:number,
    default:0
  },
  stock:{
    type:number,
    defual:0,
  },
  category:{
    type:mongoose.Schema.Typese.ObjectId,
    ref:"Category", 
    required:true,
  }
  
},{timestamps:true});

export const Product = mongoose.model("Product",productSchema);