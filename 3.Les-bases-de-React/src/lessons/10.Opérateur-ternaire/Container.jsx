import { useState } from "react";
import "./Container.css";

export default function Container() {
  const [validation, setvalidation] = useState(false);
  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Acceptez-vous ?</label>
        <input
          onClick={() => setvalidation(!validation)}
          type="checkbox"
          id="consent"
        />
        <p className={`${validation ? "valid" : "invalid"}`}>
          {" "}
          {validation ? "Bravo" : "Veuillez coché la case"}{" "}
        </p>
      </form>
    </div>
  );
}
