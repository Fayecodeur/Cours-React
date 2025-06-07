import { useReducer } from "react";

export default function Container() {
  const [count, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
    }
  }
  return (
    <div>
      <h1>Valeur du compteur : {count} </h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementer
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Décrementer
      </button>
    </div>
  );
}
