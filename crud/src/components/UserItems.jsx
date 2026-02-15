import React from "react";

export default function UserItems({ user: { prenom, nom, email, sexe } }) {
  return (
    <tr>
      <td>{prenom}</td>
      <td>{nom}</td>
      <td>{email}</td>
      <td>{sexe}</td>
    </tr>
  );
}
