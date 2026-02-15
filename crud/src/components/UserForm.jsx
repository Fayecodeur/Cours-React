import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userSchema } from "../schemas/userSchema";
import toast, { Toaster } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../api/userApi";

export default function UserForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newUser) => addUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("utilisateur ajouté avec succés ");
    },
    onError: () => {
      toast.success("Echec lors de l'ajout");
    },
  });
  const sumbitForm = async (data) => {
    mutation.mutate(data);
    reset();
  };

  return (
    <div className="container mb-4">
      <Toaster />
      <h4 className="mb-3">Ajouter un utilisateur</h4>

      <form onSubmit={handleSubmit(sumbitForm)} method="POST">
        <div className="row align-items-end g-3">
          {/* Prénom */}
          <div className="col-md-3">
            <label className="form-label">Prénom</label>
            <input
              type="text"
              {...register("prenom")}
              className="form-control"
              placeholder="Prénom"
            />
            {errors.prenom && (
              <small className="text-danger"> {errors.prenom.message} </small>
            )}
          </div>

          {/* Nom */}
          <div className="col-md-3">
            <label className="form-label">Nom</label>
            <input
              type="text"
              {...register("nom")}
              className="form-control"
              placeholder="Nom"
            />
            {errors.nom && (
              <small className="text-danger"> {errors.nom.message} </small>
            )}
          </div>

          {/* Email */}
          <div className="col-md-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              {...register("email")}
              className="form-control"
              placeholder="Email"
            />
            {errors.email && (
              <small className="text-danger"> {errors.email.message} </small>
            )}
          </div>

          {/* Sexe */}
          <div className="col-md-3">
            <label className="form-label d-block">Sexe</label>

            <div className="form-check form-check-inline">
              <input
                id="homme"
                className="form-check-input"
                type="radio"
                name="sexe"
                value="homme"
                {...register("sexe")}
              />

              <label className="form-check-label" htmlFor="homme">
                Masculin
              </label>
              {errors.sexe && (
                <small className="text-danger"> {errors.sexe.message} </small>
              )}
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sexe"
                value="femme"
                id="femme"
                {...register("sexe")}
              />

              <label className="form-check-label" htmlFor="femme">
                Féminin
              </label>
              {errors.sexe && (
                <small className="text-danger"> {errors.sexe.message} </small>
              )}
            </div>
          </div>
        </div>

        {/* Bouton */}
        <div className="mt-3">
          <button type="submit" className="btn btn-success">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}
