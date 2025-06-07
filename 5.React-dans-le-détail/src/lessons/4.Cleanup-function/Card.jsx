import { useState } from "react";
import "./card.css";
export default function Card() {
  const [state, setState] = useState(0);
  return (
    <div className="card">
      <p> state {state} </p>
      <button onClick={() => setState(state + 1)}>Incrementer</button>
    </div>
  );
}
