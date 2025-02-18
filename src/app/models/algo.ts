import {Type} from "./type";
import {User} from "./user";

export interface Algo {
  id: number;
  title: string;
  content: string;
  answer: string;
  isVisible: string;
  createdAt: number;
  updatedAt: number;
  diffuculty: string;
  type: Type[];
  user: User[];


}
