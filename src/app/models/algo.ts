import { Type } from "./type";
import { Difficulty } from "./difficulty";

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
