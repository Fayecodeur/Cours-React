import z from "zod";

export const userSchema = z.object({
  prenom: z.string().min(1, "Le prénom est obligatoire"),
  nom: z.string().min(1, "Le nom est obligatoire"),
  email: z.string().email("Email invalid"),
  sexe: z.enum(["homme", "femme"], {
    message: "Veuillez choisir un sexe",
  }),
});
