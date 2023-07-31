import { connectToDatabase } from "../server";

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
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}
