import { Suspense } from "react";
import "./App.css";
// import Batter from "./batter";
// import Users from "./users";
import Posts from "./Post";
// import Cart from "./Cart";
// import Counter from "./Counter";
// const usersDataPromise = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return data;
// };
const postDataPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

function App() {
  // const handleClick = () => {
  //   alert("Click me 3");
  // };
  // const handleCLick2 = () => {
  //   alert("Hello World");
  // };
  // const hancleAddToCart = (id: number) => {
  //   alert("Buying item " + id);
  // };
  return (
    <>
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Users usersDataPromise={usersDataPromise()}></Users>
      </Suspense> */}
      <Suspense fallback={<p>Pending....</p>}>
        <Posts postsDataPromise={postDataPromise()}></Posts>
      </Suspense>
      {/* <Cart></Cart> */}
      {/* <Counter></Counter> */}
      {/* <Batter></Batter> */}
      {/* <button onclick="handleClick()">Click Me</button> */}
      {/* <button onClick={handleCLick2}>CLick me 2</button>
      <button onClick={handleClick}>Click Me 3</button>
      <button onClick={() => alert("Click 4")}>CLick Me 4</button>
      <button onClick={() => hancleAddToCart(88)}>Buy This</button> */}
    </>
  );
}

export default App;
