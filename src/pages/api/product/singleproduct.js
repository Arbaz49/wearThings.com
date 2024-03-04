// pages/api/products/[id].js
import Product from "@/models/product";
import connectDB from "../../../utils/connectDb";

export default async function handler(req, res) {
  const { id } = req.query;
  connectDB();
  let product=await Product.findOne({ _id: id });
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
res.status(200).json(product);
}
