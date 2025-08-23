import usePosts from "../services/usePosts.js";
import Posts from "../components/Posts.jsx";
export default function Home() {
  const { data: posts, isLoading, error } = usePosts();
  if (isLoading)
    return (
      <p className="my-5 text-xl text-gray-500 text-center">Chargement...</p>
    );
  if (error)
    return (
      <p className="my-5 text-xl text-red-500 text-center"> {error.message} </p>
    );
  return (
    <section className="py-10 container mx-auto px-6 md:px-8">
      <h1 className="text-center mb-5 text-2xl md:text-3xl">
        Liste des articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {posts?.map((post) => (
          <Posts
            key={post.id}
            title={post.title}
            body={post.body}
            path={`/posts/${post.id}`}
          />
        ))}
      </div>
    </section>
  );
}
