export default function ListItems({ todo, handleDelete }) {
  return (
    <li className="bg-zinc-300 p-2 rounded flex mb-2">
      <span>{todo.name}</span>
      <button
        onClick={() => handleDelete(todo.id)}
        className="ml-auto bg-red-500  text-white h-6 w-6 rounded "
      >
        X
      </button>
    </li>
  );
}
