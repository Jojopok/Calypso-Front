import { Type } from "./type";

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
  userId: number;
}
