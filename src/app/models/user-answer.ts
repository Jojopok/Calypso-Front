import { Algo } from './algo';
import { User } from './user';

export interface UserAnswer {
  id?: number;
  content: string;
  isRight: boolean;
  algo: Algo;
  user: User;
}
