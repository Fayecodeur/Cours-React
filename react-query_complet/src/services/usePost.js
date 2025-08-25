import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function usePost(id) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      try {
        const response = axios.get(`http://localhost:3000/posts/${id}`);
        return (await response).data;
      } catch (error) {
        console.error("Erreur " + error);
        throw new Error("Erreur lors de l'articles");
      }
    },
    enabled: !!id,
  });
}
