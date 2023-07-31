import { connectToDatabase } from "../server";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { id } = req.query;

  if (!id) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }

  try {
    const client = await connectToDatabase();
    const collection = client.db("sr-pc-builder").collection("products");

    const result = await collection.find({ categoryId: id }).toArray();
    console.log("first", result, id);
    if (!result) {
      res.status(404).json({ error: "Data not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}
