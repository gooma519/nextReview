import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json("빈칸을 채워주세요!");
    } else {
      req.body.password = await bcrypt.hash(password, 10);
      let db = (await connectDB).db("forum");
      let isDuplicate = await db.collection("users").findOne({ email: email });
      if (!isDuplicate) {
        req.body.role = "normal";
        let result = db.collection("users").insertOne(req.body);
        return res.status(200).json("가입 성공!");
      } else {
        return res.status(400).json("이미 존재하는 이메일입니다.");
      }
    }
  }
}
