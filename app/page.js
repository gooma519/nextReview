import { connectDB } from "@/utils/database";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return <div>홈페이지</div>;
}
