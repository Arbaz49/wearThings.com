import Product from "@/models/product";
import connectDB from "../../../utils/connectDb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    connectDB();
    if(req.method == "PATCH"){
        try{
            let product=await Product.findByIdAndUpdate(req.body._id,req.body);
            res.status(200).json({message:"success" })
        }catch(err){
            res.status(500).json({error:"internal error"})
        }
    }else{
      res.status(400).json("not valid request")  
    }
  }
  