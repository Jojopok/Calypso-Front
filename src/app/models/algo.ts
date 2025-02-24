import { Type } from "./type"; // 🔥 Import du modèle Type
import { Difficulty } from "./difficulty"; // 🔥 Import du modèle Difficulty

export interface Algo {
  id: number;
  title: string;
  content: string;
  answer: string;
  isVisible: boolean;
  createdAt: Date;
  updatedAt: Date;
  difficulty: Difficulty;
  types: Type[];
  userId: number;
}
