import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { _id } = JSON.parse(req.body);
    const db = (await connectDB).db("forum");
    const result = await db.collection("post").deleteOne({
      _id: new ObjectId(_id),
    });
    return res.status(200).json(result);
  }
}
