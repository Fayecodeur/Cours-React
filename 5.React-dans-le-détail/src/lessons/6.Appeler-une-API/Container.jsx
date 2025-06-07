import { useState, useEffect } from "react";
import "./Container.css";
import spiner from "./spinner.svg";
export default function Container() {
  const [apiState, setApiState] = useState({
    isLoading: false,
    error: false,
    data: undefined,
  });
  let content;
  if (apiState.isLoading) content = <img src={spiner} alt="image" />;
  else if (apiState.error) content = <p>Une erreur est survenue...</p>;
  else if (apiState.data?.length > 0) {
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <span> {user.name}</span>
          <span> {user.phone}</span>
          <span> {user.email}</span>
        </li>
      ))}
    </ul>;
  } else if (apiState.data?.length === 0) {
    <p>Aucune données trouvées...</p>;
  }
  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  );
}
