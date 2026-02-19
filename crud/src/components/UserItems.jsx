import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/userApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function UserItems({ user: { id, prenom, nom, email, sexe } }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("Utlisateur supprimé");
    },
    onError: () => {
      toast.error("Echec lors de la suppression");
    },
  });

  return (
    <tr>
      <td>{prenom}</td>
      <td>{nom}</td>
      <td>{email}</td>
      <td>{sexe}</td>
      <td>
        <Link to={`/edit/user/${id}`} className="btn btn-warning btn-sm me-3">
          Modifier
        </Link>

        <button
          onClick={() => mutation.mutate(id)}
          className="btn btn-danger btn-sm"
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
}
