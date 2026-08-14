import { useCounter } from "./store/counterStore";

function App() {
  const count = useCounter().count;
  const increment = useCounter().increment;
  const decrement = useCounter().decrement;
  return (
    <>
      <h1>Zustand</h1>
      <h2>Compteur : {count} </h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
