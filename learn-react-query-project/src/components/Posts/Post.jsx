export function Post({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>

      <p className="text-gray-600 line-clamp-3 mb-4">{post.body}</p>

      <button className="text-blue-600 font-medium hover:underline">
        Lire plus
      </button>
    </div>
  );
}
