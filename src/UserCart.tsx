import "./UserCard.css";
export default function UserCard({ user }) {
  return (
    <div className="user">
      <h2>Name: {user.name} </h2>
      <p>E-mail: {user.email} </p>
      <p>
        <small>Phone: {user.phone} </small>
      </p>
    </div>
  );
}
