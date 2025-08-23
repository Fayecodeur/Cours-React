import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useAuthors() {
  return useQuery({
    queryKey: ["authors"],
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        return response.data;
      } catch (error) {
        console.error("Error " + error);
        throw new Error("Erreur lors de la récupération des auteurs");
      }
    },
  });
}
