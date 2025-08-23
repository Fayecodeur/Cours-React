import useAuthor from "../services/useAuthors";
export default function Authors() {
  const { data: authors } = useAuthor();
  return (
    <section className="py-10 container mx-auto px-6 md:px-8">
      <h1 className="text-center mb-5 text-2xl md:text-3xl">
        Liste des auteurs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {authors?.map((author) => (
          <div className="shadow p-4 hover:shadow-xl">
            <p className="text-xl mb-">{author.name}</p>
            <p className="text-gray-500"> {author.email} </p>
          </div>
        ))}
      </div>
    </section>
  );
}
