import { useSelector, useDispatch } from "react-redux";
import { AddOn, RemoveOn } from "../../features/fruitCartSlice.js";
import FruityCart from "./FruityCart.jsx";

export default function Fruity() {
  const fruits = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-200">Fruity</h1>
      <p className="text-xl text-slate-300 mb-10">
        Pick your fruits ans get delivered the next days
      </p>
      <ul className="flex gap-1">
        {fruits.list.map((fruit) => (
          <li key={fruit.id} className="bg-slate-100 p-3 w-full">
            <img
              src={fruit.url}
              className="h-[200px] object-cover w-full rounded "
              alt={fruit.name}
            />
            <div className="flex justify-between items-baseline mt-3">
              <p className="text-xl font-semibold">{fruit.name}</p>
              <p> Per unit ${fruit.price}</p>
            </div>
            <div className="flex gap-2 mt-3 ">
              <button
                onClick={() => dispatch(AddOn(fruit))}
                className="p-1 w-full bg-green-500 text-slate-100 rounded hover:bg-green-600"
              >
                +1
              </button>
              <button
                onClick={() => dispatch(RemoveOn(fruit.id))}
                className="p-1 w-full bg-red-500 text-slate-100 rounded hover:bg-red-600"
              >
                -1
              </button>
            </div>
          </li>
        ))}
      </ul>
      <FruityCart />
    </div>
  );
}
