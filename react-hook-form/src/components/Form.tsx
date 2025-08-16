import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormValues } from "../libs/validation";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Données envoyées :", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow space-y-4"
    >
      {/* Nom complet */}
      <div>
        <label htmlFor="nomComplet" className="block mb-1 text-gray-700">
          Nom complet
        </label>
        <input
          {...register("nomComplet")}
          id="nomComplet"
          type="text"
          placeholder="Entrez votre nom complet"
          className={`w-full border p-2 rounded-md outline-none ${
            errors.nomComplet ? "border-red-500" : "border-gray-300"
          } focus:border-blue-300 focus:ring focus:ring-blue-200`}
        />
        {errors.nomComplet && (
          <small className="text-red-500">{errors.nomComplet.message}</small>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-1 text-gray-700">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="Entrez votre email"
          className={`w-full border p-2 rounded-md outline-none ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:border-blue-300 focus:ring focus:ring-blue-200`}
        />
        {errors.email && (
          <small className="text-red-500">{errors.email.message}</small>
        )}
      </div>

      {/* Mot de passe */}
      <div>
        <label htmlFor="password" className="block mb-1 text-gray-700">
          Mot de passe
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          placeholder="Entrez votre mot de passe"
          className={`w-full border p-2 rounded-md outline-none ${
            errors.password ? "border-red-500" : "border-gray-300"
          } focus:border-blue-300 focus:ring focus:ring-blue-200`}
        />
        {errors.password && (
          <small className="text-red-500">{errors.password.message}</small>
        )}
      </div>

      {/* Confirmation mot de passe */}
      <div>
        <label htmlFor="confirmPassword" className="block mb-1 text-gray-700">
          Confirmez le mot de passe
        </label>
        <input
          {...register("confirmPassword")}
          id="confirmPassword"
          type="password"
          placeholder="Confirmez votre mot de passe"
          className={`w-full border p-2 rounded-md outline-none ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } focus:border-blue-300 focus:ring focus:ring-blue-200`}
        />
        {errors.confirmPassword && (
          <small className="text-red-500">
            {errors.confirmPassword.message}
          </small>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Envoyer
      </button>
    </form>
  );
}
