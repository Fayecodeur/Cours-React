import { useSelector } from "react-redux";

export default function FruityCart() {
  const fruitCart = useSelector((state) => state.fruitCart);
  const cart = fruitCart.cart;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-slate-100 rounded">
      <p className="text-xl p-5 border-b border-slate-400">Votre Panier</p>

      <ul>
        {cart.length > 0 ? (
          cart.map((fruit) => (
            <li className="px-5 py-2 text-xl" key={fruit.id}>
              <span className="font-semibold mr-2">{fruit.quantity}x</span>
              <span>{fruit.name}</span>
            </li>
          ))
        ) : (
          <li className="px-5 py-2 text-xl">🍍 Ajoutez un fruit !</li>
        )}
      </ul>

      <p className="text-xl p-5 border-t border-slate-400">
        Total : <span className="font-bold">{total} $</span>
      </p>
    </div>
  );
}
