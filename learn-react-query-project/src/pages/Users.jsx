import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function Users() {
  const fetchAuthors = async () => {
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  };

  const {
    data: authors,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: fetchAuthors,
  });

  return (
    <div>
      <h1 className="text-4xl my-8 text-center">Auteurs</h1>
      {isLoading && <p className="text-center">Chargement</p>}
      {error && <p className="text-center text-red-500">Erreur</p>}
      <ul>
        {authors?.map((author) => (
          <li key={author.id} className="flex flex-col my-4">
            <span>
              {author.name}{" "}
              <span className="text-gray-400">@{author.username}</span>
            </span>
            <span className="text-gray-500">{author.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
