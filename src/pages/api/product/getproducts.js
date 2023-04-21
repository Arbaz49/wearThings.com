import Product from "@/models/product";
import connectDB from "../../../utils/connectDb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    connectDB();
    if(req.method == "GET"){
        let products=await Product.find();
        res.status(200).json({products })

    }else{
      res.status(400).json("not valid request")  
    }
  }
  