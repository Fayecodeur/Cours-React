import useAPICall from "./hooks/useAPICall.js";
import spinner from "./spinner.svg";

export default function Container() {
  const { catData, loading, error } = useAPICall();

  return (
    <div>
      <h1>Photo de chats 🐾</h1>

      {loading && <img src={spinner} alt="Chargement..." />}
      {error && <p>Une erreur est survenue lors du chargement 🐱‍🚀</p>}

      {catData && catData.length > 0 && (
        <div>
          {catData.map((cat, index) => (
            <img
              key={index}
              src={cat.url}
              alt="Chat mignon"
              style={{ maxWidth: "300px", marginBottom: "1rem" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
