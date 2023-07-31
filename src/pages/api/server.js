import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.u8ryf95.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let cachedClient = null;

export async function connectToDatabase() {
  if (!cachedClient || !cachedClient.isConnected()) {
    if (!cachedClient) {
      cachedClient = await client.connect();
    } else {
      await cachedClient.connect();
    }
    console.log("🛢 DB Connection Success!");
  }

  return cachedClient;
}
