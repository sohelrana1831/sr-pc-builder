import { connectToDatabase } from "./server";

export default async function handler(req, res) {
  try {
    if (req.method === "GET" && !req.query.id) {
      const client = await connectToDatabase();
      const productsCollection = client
        .db("sr-pc-builder")
        .collection("products");

      try {
        const product = await productsCollection.find({}).toArray();
        if (!product) {
          res.status(404).json({ error: "Product not found" });
        } else {
          res.status(200).json(product);
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
      }
    } else if (req.method === "GET" && req.query.id) {
      const client = await connectToDatabase();
      const productsCollection = client
        .db("sr-pc-builder")
        .collection("products");

      const productId = req.query.id; // Access the product ID from the query parameter

      try {
        const product = await productsCollection.findOne({
          _id: ObjectId(productId),
        });
        if (!product) {
          res.status(404).json({ error: "Product not found" });
        } else {
          res.status(200).json(product);
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
      }
    } else {
      // Handle other HTTP methods if necessary
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}
