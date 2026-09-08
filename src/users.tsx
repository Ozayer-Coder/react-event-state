import { use } from "react";
import UserCard from "./UserCart";

function Users({ usersDataPromise }) {
  const users = use(usersDataPromise);
  return (
    <div>
      <h2>Users : {users.length} </h2>
      {users.map((user) => (
        <UserCard user={user}></UserCard>
      ))}
    </div>
  );
}

export default Users;
/**
 * Suspanse fallback
 * Create a promise function to load data
 * Send the promiste to the componnet to load data
 */

/**
 * Data source || JSON
 * JSON.stringigy()
 * JSON.parse()
 *
 * .json()
 *
 *
 */

// // callback
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// //   async await
// async function loadData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return data;
// }

// const loadData2 = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = res.json();
//   return data;
// };
