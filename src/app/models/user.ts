import { Promo } from "./promo";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    email: string;
    odysseyLink?: string;
    role: string;
    avatarUrl?: string;
    promos: Promo[];
    fullName: string;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        role: string,
        promos: Promo[]
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.promos = promos;
        this.fullName = '';
    }
}

