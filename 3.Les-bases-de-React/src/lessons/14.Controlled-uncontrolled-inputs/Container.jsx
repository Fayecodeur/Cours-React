import { useState, useRef } from "react";
import "./Container.css";

export default function Container() {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>
      <label htmlFor="pseudo">Votre pseudo</label>
      <input
        type="text"
        id="pseudo"
        value={value}
        onChange={handleInputChange}
      />
      <button>Envoyer</button>
      <p>Votre pseudo : {value}</p>
    </div>
  );
}
