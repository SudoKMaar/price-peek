"use server";
import { connectToDB } from "@/lib/mongoose";
import Product from "@/lib/product-model";

export async function getAllProducts() {
  try {
    connectToDB();
    const products = await Product.find();
    return products;
  } catch (error) {
    console.log(error);
  }
}
