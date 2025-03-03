import { Type } from "./type";
import { Difficulty } from "./difficulty";
import { UserAnswer } from "./UserAnswer";

export interface Algo {
  id: number;
  title: string;
  content: string;
  answer: string;
  isVisible: boolean;
  createdAt: Date;
  updatedAt: Date;
  difficulty: Number;
  type: Type[];
  userAnswer: UserAnswer[];
  userId: number;
}
