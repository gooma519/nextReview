"use client";

import Link from "next/link";

function ListItem({ item: { _id, title, content, author }, idx, user }) {
  const handleClickDelete = async (e) => {
    let res = await fetch("http://localhost:3000/api/post/delete", {
      method: "DELETE",
      body: JSON.stringify({ _id }),
    });
    e.target.parentElement.style.opacity = 0;
    setTimeout(() => {
      e.target.parentElement.style.display = "none";
    }, 1000);
  };

  console.log(user);

  return (
    <div className="list-item">
      <Link href={`/detail/${_id}`}>
        <h4>{title}</h4>
      </Link>
      <p>{content}</p>
      {user && (author === user.email || user.role === "admin") ? (
        <>
          <Link href={`/edit/${_id}`}>✏️</Link>
          <span onClick={handleClickDelete} style={{ cursor: "pointer" }}>
            🗑️
          </span>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default ListItem;
