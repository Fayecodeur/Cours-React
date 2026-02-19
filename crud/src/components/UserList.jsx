import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/userApi";
import UserItems from "./UserItems";
import UserForm from "./UserForm";

export default function UserList() {
  // React Query pour fetch les utilisateurs
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <div className="container mt-4">
      <UserForm />
      <h1 className="mb-4">Liste des utilisateurs</h1>

      {isLoading && <p>Chargement...</p>}
      {error && (
        <p className="text-danger">
          {error?.message || "Erreur lors du chargement"}
        </p>
      )}

      {!isLoading && !error && (
        <table className="table table-sm table-striped table-hover">
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Sexe</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <UserItems key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
