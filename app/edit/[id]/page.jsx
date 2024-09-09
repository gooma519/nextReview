import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

async function Edit({ params }) {
  const db = (await connectDB).db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });
  return (
    <div>
      <div className="title">수정 페이지</div>
      <form action="http://localhost:3000/api/post/edit" method="POST">
        <input
          type="text"
          style={{ display: "none" }}
          name="_id"
          defaultValue={params.id}
        />
        <label htmlFor="title">글 제목</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          defaultValue={result.title}
        />

        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          name="content"
          rows="10"
          required
          defaultValue={result.content}
        ></textarea>

        <button type="submit">게시글 작성</button>
      </form>
    </div>
  );
}

export default Edit;
