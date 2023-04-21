import Head from "next/head";
import Link from "next/link";
import React from "react";
import Product from "@/models/product";
import connectDB from "../utils/connectDb";
const Tshirts = ({products}) => {
  console.log(products)
  return (
    <div>
      <Head>
        <title>

Buy-tshirts
        </title>
      </Head>
      <h2 className="text-5xl  text-center">Explore Our Tshirts Collection</h2>
      <p className="m-4 font-semibold">Welcome to WearThings.com, your one-stop shop for stylish and unique tshirts. Buy T-Shirts at the best price in India. We offer a wide range of tshirts for all interests, including coding tshirts, anime tshirts, and casual tshirts for everyday wear. All of our tshirts are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect tshirt for you!</p>
      <section className="text-gray-600 body-font flex justify-center m-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <Link href={"/product/product name"} className="m-3 lg:w-1/4 md:w-1/2 p-4 w-96 shadow-xl mt-2 cursor-pointer">
              <a className="relative  rounded overflow-hidden">
                <img 
                  alt="ecommerce"
                  className="h-[36vh] m-auto  block"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">₹499</p>
                <p className="text-black capitalize">s,m,l,xl,xxl</p>
              </div>
            </Link>
            <Link href={"/product/product name"} className="m-3 lg:w-1/4 md:w-1/2 p-4 w-96 shadow-xl mt-2 cursor-pointer">
              <a className="relative  rounded overflow-hidden">
                <img 
                  alt="ecommerce"
                  className="h-[36vh] m-auto  block"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">₹499</p>
                <p className="text-black capitalize">s,m,l,xl,xxl</p>
              </div>
            </Link>{" "}
            <Link href={"/product/product name"} className="m-3 lg:w-1/4 md:w-1/2 p-4 w-96 shadow-xl mt-2 cursor-pointer">
              <a className="relative  rounded overflow-hidden">
                <img 
                  alt="ecommerce"
                  className="h-[36vh] m-auto  block"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">₹499</p>
                <p className="text-black capitalize">s,m,l,xl,xxl</p>
              </div>
            </Link>{" "}
            <Link href={"/product/product name"} className="m-3 lg:w-1/4 md:w-1/2 p-4 w-96 shadow-xl mt-2 cursor-pointer">
              <a className="relative  rounded overflow-hidden">
                <img 
                  alt="ecommerce"
                  className="h-[36vh] m-auto  block"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">₹499</p>
                <p className="text-black capitalize">s,m,l,xl,xxl</p>
              </div>
            </Link>{" "}
            <Link href={"/product/product name"} className="m-3 lg:w-1/4 md:w-1/2 p-4 w-96 shadow-xl mt-2 cursor-pointer">
              <a className="relative  rounded overflow-hidden">
                <img 
                  alt="ecommerce"
                  className="h-[36vh] m-auto  block"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">₹499</p>
                <p className="text-black capitalize">s,m,l,xl,xxl</p>
              </div>
            </Link>{" "}
            <Link href={"/product/product name"} className="m-3 lg:w-1/4 md:w-1/2 p-4 w-96 shadow-xl mt-2 cursor-pointer">
              <a className="relative  rounded overflow-hidden">
                <img 
                  alt="ecommerce"
                  className="h-[36vh] m-auto  block"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">₹499</p>
                <p className="text-black capitalize">s,m,l,xl,xxl</p>
              </div>
            </Link>{" "}
            <Link href={"/product/product name"} className="m-3 lg:w-1/4 md:w-1/2 p-4 w-96 shadow-xl mt-2 cursor-pointer">
              <a className="relative  rounded overflow-hidden">
                <img 
                  alt="ecommerce"
                  className="h-[36vh] m-auto  block"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">₹499</p>
                <p className="text-black capitalize">s,m,l,xl,xxl</p>
              </div>
            </Link>
            <Link href={"/product/product name"} className="m-3 lg:w-1/4 md:w-1/2 p-4 w-96 shadow-xl mt-2 cursor-pointer">
              <a className="relative  rounded overflow-hidden">
                <img 
                  alt="ecommerce"
                  className="h-[36vh] m-auto  block"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">₹499</p>
                <p className="text-black capitalize">s,m,l,xl,xxl</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  await connectDB();
  let products=await Product.find();
  console.log(products)
let productsCopy=JSON.parse(JSON.stringify(products));
  return {
    props: {products:productsCopy}, // will be passed to the page component as props
  }
}
export default Tshirts;
