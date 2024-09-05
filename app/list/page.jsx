import { connectDB } from "@/utils/database";
import Link from "next/link";

async function List(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((el, id) => (
        <Link key={id + "item"} href={`/detail/${el._id}`}>
          <div className="list-item" key={id + "item"}>
            <h4>{el.title}</h4>
            <p>{el.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default List;
