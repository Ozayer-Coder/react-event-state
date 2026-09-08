import { use } from "react";
import "./UserCard.css";
import PostCard from "./PostCard";

export default function Posts({ postsDataPromise }) {
  const posts = use(postsDataPromise);
  return (
    <div className="user">
      <h2>Posts: {posts.length} </h2>
      {posts.map((post) => {
        <PostCard post={post}></PostCard>;
      })}
    </div>
  );
}
