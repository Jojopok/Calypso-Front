export interface User {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    email: string;
    odysseyProfile?: string; 
    role: string;
    avatarUrl?: string;
}
