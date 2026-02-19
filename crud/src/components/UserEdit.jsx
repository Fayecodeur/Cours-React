import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserById, updateUser } from "../api/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userSchema } from "../schemas/userSchema";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserEdit() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("Utilisateur modifié avec succès !");
      navigate("/");
    },
    onError: () => {
      toast.error("Échec de la modification...");
    },
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      sexe: "",
    },
  });
  const { id } = useParams();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });
  useEffect(() => {
    if (user) {
      reset({
        prenom: user.prenom,
        nom: user.nom,
        email: user.email,
        sexe: user.sexe,
      });
    }
  }, [user, reset]);

  if (isLoading) return <p className="text-2xl text-center">Chargement...</p>;
  if (isError)
    return <p className="text-2xl text-red-500">Une erreur s'est passée ...</p>;
  if (!user)
    return <p className="text-2xl text-center">Aucun utilisateur trouvé</p>;
  const submitForm = (data) => {
    mutation.mutate(data);
  };
  return (
    <div className="container mb-4 mt-5">
      <Toaster />
      <h4 className="mb-3">Modification</h4>

      <form method="POST" onSubmit={handleSubmit(submitForm)}>
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
          <button type="submit" className="btn btn-warning">
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
}
