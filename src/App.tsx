import "./App.css";
import Batter from "./batter";
// import Cart from "./Cart";
// import Counter from "./Counter";

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
      {/* <Cart></Cart> */}
      {/* <Counter></Counter> */}
      <Batter></Batter>
      {/* <button onclick="handleClick()">Click Me</button> */}
      {/* <button onClick={handleCLick2}>CLick me 2</button>
      <button onClick={handleClick}>Click Me 3</button>
      <button onClick={() => alert("Click 4")}>CLick Me 4</button>
      <button onClick={() => hancleAddToCart(88)}>Buy This</button> */}
    </>
  );
}

export default App;
