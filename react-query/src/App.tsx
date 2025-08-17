import { useQuery } from "@tanstack/react-query";
import { type Post } from "./types/type";
import { getPosts } from "./services/postsApi.ts";
import "./App.css";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["post"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <p className="text-center text-xl text-gray-500">Chargement...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-xl text-red-500">
        Erreur lors de la récuperation des données...
      </p>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8 text-blue-600">
        📚 Liste des postes
      </h1>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {data?.map((post: Post) => (
          <div
            key={post.id}
            className="p-5 border rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
