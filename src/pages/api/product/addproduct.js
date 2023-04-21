import Product from "@/models/product";
import connectDB from "../../../utils/connectDb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  connectDB();
  if (req.method == "POST") {
    let product = await Product({
      title:req.body.title,
      slug:req.body.slug,
      desc:req.body.desc,
      img:req.body.img,
      category:req.body.category,
      size:req.body.size,
      color:req.body.color,
      price:req.body.price,
      availableQty:req.body.availableQty,
    });
   await product.save();
    res.status(201).json({message:"success", product });
  } else {
    res.status(400).json("not valid request");
  }
}
