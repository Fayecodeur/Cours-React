import axios from "axios";
import { type Post } from "../types/type.ts";

export async function getPosts(): Promise<Post[]> {
  try {
    const response = await axios.get<Post[]>("http://localhost:3001/posts");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération... " + error);
    throw error;
  }
}
