import User from "@/models/user";
import connectDB from "../../../utils/connectDb"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    connectDB();
    if(req.method == "GET"){
        let users=await User.find();
        res.status(200).json({users })

    }else{
      res.status(400).json("not valid request")  
    }
  }
  