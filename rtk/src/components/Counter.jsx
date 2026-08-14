import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementBy,
} from "../features/counter/counterSlice";
export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter = {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementBy(10))}>+ 10 </button>
      <button onClick={() => dispatch(incrementBy(20))}>+ 20 </button>
    </>
  );
}
