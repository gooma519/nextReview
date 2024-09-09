import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useRouter } from "next/router";

function Page(props) {
  const session = getServerSession(authOptions);
  let router = useRouter();
  if (session) {
    router.reload("/api/auth/signin");
  }
  return (
    <form action="http://localhost:3000/api/post" method="POST">
      <label htmlFor="title">글 제목</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="content">내용</label>
      <textarea id="content" name="content" rows="10" required></textarea>

      <button type="submit">게시글 작성</button>
    </form>
  );
}

export default Page;
