import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListItems from "./components/ListItems.jsx";
export default function App() {
  const [todoList, setTodoList] = useState([]);

  const [newTodo, setNewTodo] = useState("");
  const [isValidion, setIsValidion] = useState(false);

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleChangeInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") {
      setIsValidion(true);
      return;
    }
    setTodoList([...todoList, { id: uuidv4(), name: newTodo }]);
    setIsValidion(false);
    setNewTodo("");
  };

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl text-slate-100 mb-4">La todo-list</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <label htmlFor="todo" className="text-slate-50 mb-3 block">
            Ajouter une tache
          </label>
          <input
            value={newTodo}
            onChange={handleChangeInput}
            type="text"
            id="todo"
            className="block w-full p-2 rounded
          "
          />
          {isValidion && (
            <p className="text-red-500 text-base mt-1">
              La description du tache est obligatoire
            </p>
          )}
          <button className="min-w-[115px] bg-slate-100 py-2 px-2 rounded mt-3">
            Ajouter
          </button>
        </form>
        {todoList.length === 0 && (
          <p className="text-slate-100">Aucune tache en cours ...</p>
        )}

        <ul>
          {todoList.length > 0 &&
            todoList.map((todo) => (
              <ListItems
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
