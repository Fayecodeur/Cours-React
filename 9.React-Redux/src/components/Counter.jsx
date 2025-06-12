import { useSelector } from "react-redux";
import CounterButton from "./CounterButton.jsx";
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <CounterButton />
      <p className="text-white text-3xl">Valuer de Counter : {count}</p>
    </div>
  );
}
