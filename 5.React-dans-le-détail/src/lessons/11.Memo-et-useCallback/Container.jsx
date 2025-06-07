import Card from "./Card.jsx";
import { useState, useCallback } from "react";

export default function Container() {
  const [count, setCount] = useState(0);
  const customLog = useCallback(() => console.log("Hello"), []);

  return (
    <div>
      <h1>Memo et useCallback</h1>
      <p> {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementer</button>
      <Card text={"text"} customLog={customLog} />
    </div>
  );
}
