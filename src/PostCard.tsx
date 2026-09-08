import "./UserCard.css";

export default function PostCard({ post }) {
  return (
    <div className="user">
      <p>Id: {post.id} </p>
      <h3>Title: {post.title} </h3>
    </div>
  );
}
