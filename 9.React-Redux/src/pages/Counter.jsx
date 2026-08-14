import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/counter";
export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div className="text-3xl text-slate-100 mb-4">Counter {count}</div>
      <button
        onClick={() => dispatch(increment())}
        className="h-5 w-5  px-5 bg-slate-200 "
      >
        +1
      </button>
    </>
  );
}
