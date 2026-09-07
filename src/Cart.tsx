export default function Cart() {
  let counter = 0;
  const handleAddToCart = () => {
    counter++;
  };
  return (
    <div>
      <h3>Shopping Cart</h3>
      <p>Items in the Cart: {counter} </p>
      <button onClick={handleAddToCart}>Add</button>
    </div>
  );
}
