import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { _id, title, content } = req.body;
    const db = (await connectDB).db("forum");
    const result = await db.collection("post").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          title,
          content,
        },
      },
    );
    return res.status(200).redirect("/detail/" + _id);
  }
}
