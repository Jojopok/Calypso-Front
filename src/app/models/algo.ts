import { Type } from "./type";
import { UserAnswer } from "./user-answer";

export class Algo {
  id: number;
  title: string;
  content: string;
  answer: string;
  isVisible: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  difficultyId: number;
  type: Type[];
  userAnswer: UserAnswer[];
  userId: number

  constructor(
    id: number,
    title: string,
    content: string,
    answer: string,
    isVisible: boolean,
    createdAt: Date,
    updatedAt: Date | null,
    difficultyId: number,
    type: Type[],
    userAnswer: UserAnswer[],
    userId: number
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.answer = answer;
    this.isVisible = isVisible;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.difficultyId = difficultyId;
    this.type = type;
    this.userAnswer = userAnswer;
    this.userId = userId;
  }
}
