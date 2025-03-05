import { Type } from "./type";
import { UserAnswer } from "./UserAnswer";

export interface Algo {
  id: number;
  title: string;
  content: string;
  answer: string;
  isVisible: boolean;
  createdAt: Date;
  updatedAt: Date;
  difficultyId: number;
  type: Type[];
  userAnswer: UserAnswer[];
  userId: number;
}
