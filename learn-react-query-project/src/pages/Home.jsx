import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Post } from "../components/Posts/Post";

export function Home() {
  const getPosts = async () => {
    const response = await axios.get("http://localhost:3000/posts?_limit=20");
    return response.data;
  };

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center my-10">Articles</h1>

      {isLoading && (
        <p className="text-center text-lg">Chargement des articles...</p>
      )}

      {error && (
        <p className="text-center text-red-500 text-lg">
          Erreur lors de la récupération des posts
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
