import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const response = axios.get(
          "http://localhost:3000/posts?_limit=20&page=1"
        );
        return (await response).data;
      } catch (error) {
        console.error("Erreur " + error);
        throw new Error("Erreur lors de la récupération des articles");
      }
    },
  });
}
