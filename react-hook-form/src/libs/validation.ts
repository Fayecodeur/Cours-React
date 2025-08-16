import { z } from "zod";

// Schema du formulaire
export const formSchema = z
  .object({
    nomComplet: z
      .string()
      .nonempty("Le nom complet est requis")
      .min(2, "Le nom complet doit contenir au moins 2 lettres")
      .max(50, "Le nom complet ne peut pas dépasser 50 lettres")
      .regex(
        /^[A-Za-z\s]+$/,
        "Le nom complet ne doit contenir que des lettres et espaces"
      ),
    email: z.string().nonempty("L'email est requis").email("Email invalide"),
    password: z
      .string()
      .nonempty("Le mot de passe est requis")
      .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    confirmPassword: z.string().nonempty("La confirmation est requise"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

// Type généré automatiquement
export type FormValues = z.infer<typeof formSchema>;
