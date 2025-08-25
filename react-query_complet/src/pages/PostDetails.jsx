import { Link, useParams } from "react-router-dom";
import usePost from "../services/usePost.js";

export default function PostDetails() {
  const { id } = useParams();
  const { data: post, isLoading, error } = usePost(id);
  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="py-10 container mx-auto px-6 md:px-8">
      <h2 className="mb-3 text-2xl">{post.title}</h2>
      <p className="text-gray-800">{post.body}</p>
      <Link
        to="/"
        className="bg-blue-500 text-white font-bold px-3 py-2 rounded-md mt-5 block w-[100px] text-center"
      >
        Retour
      </Link>
    </div>
  );
}
