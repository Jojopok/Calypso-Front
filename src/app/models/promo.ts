import { User } from "./user";

export interface Promo {
    id: number;               
    name: string;             
    type: string;             
    city: string;             
    beginAt: number;          
    isVisible: boolean;       
    users: User[];            
  }