import React from "react";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

async function Detail({ params: { id } }) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}

export default Detail;
