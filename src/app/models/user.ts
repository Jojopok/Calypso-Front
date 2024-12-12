export interface User {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    email: string;
    odysseyLink?: string; 
    role: string;
    avatarUrl?: string;
}
