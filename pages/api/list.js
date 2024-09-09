import { connectDB } from "@/utils/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const db = (await connectDB).db("forum");
    const result = await db.collection("post").find().toArray();
    return res.status(200).json(result);
  }
  if (req.method === "POST") {
    return res.status(200).json({ message: "없다" });
  }
}
