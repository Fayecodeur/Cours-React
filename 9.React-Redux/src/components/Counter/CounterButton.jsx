import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../features/counter.js";
export default function CounterButton() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(increment())}
        className="bg-slate-100 px-3 py-2 rounded mr-3"
      >
        +1
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-slate-100 px-3 py-2 rounded mr-3"
      >
        - 1
      </button>
      <button
        onClick={() => dispatch(reset())}
        className="bg-slate-100 px-3 py-2 rounded"
      >
        reset
      </button>
    </>
  );
}
