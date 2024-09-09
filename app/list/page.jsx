import { connectDB } from "@/utils/database";
import ListItem from "@/app/list/ListItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function List(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  let session = await getServerSession(authOptions);

  return (
    <div className="list-bg">
      {result.map((el, idx) => {
        el._id = el._id.toString();
        return (
          <ListItem
            item={el}
            idx={idx}
            key={idx + "item"}
            user={session ? session.user : null}
          />
        );
      })}
    </div>
  );
}

export default List;
