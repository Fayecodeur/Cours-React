import { Link } from "react-router-dom";

export default function Posts({ title, body, path }) {
  function trucate(str, length) {
    return str.substr(0, length) + "...";
  }
  return (
    <div className="p-6 shadow hover:shadow-md">
      <h2 className="text-xl mb-3">{trucate(title, 30)}</h2>
      <p className="text-gray-500 mb-5">{trucate(body, 100)}</p>
      <Link
        to={path}
        className="bg-blue-500 block w-[100px] text-white py-2 px-3 rounded-md hover:bg-blue-600 text-center"
      >
        Voir plus
      </Link>
    </div>
  );
}
