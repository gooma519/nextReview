import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }
  if (req.method === "POST") {
    const { title, content } = req.body;
    if (title.length < 0 && req.body.content.length < 0) {
      res.status(400).json("제목과 내용을 모두 채워주세요");
    } else if (title.length > 50) {
      res.status(400).json("제목이 너무 길어요");
    }
    try {
      const db = (await connectDB).db("forum");
      const data = await db.collection("post").insertOne(req.body);
      return res.status(200).redirect(`/list`);
    } catch (error) {
      console.error(error);
    }
  }
}
