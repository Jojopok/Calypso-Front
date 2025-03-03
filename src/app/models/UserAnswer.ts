export interface UserAnswer {
  id: number;
  content: string | null;
  isRight: boolean;
  algoId: number;
  userId: number;
}
