export default function Container() {
  const data = [
    { id: 1, name: "Marie" },
    { id: 2, name: "Paul" },
    { id: 3, name: "Jean" },
  ];
  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
