import { Promo } from "./promo";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    email: string;
    odysseyLink?: string;
    roles: string[];
    avatarUrl?: string;
    promos: Promo[];
    fullName: string;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        roles: string[],
        promos: Promo[]
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roles = roles;
        this.promos = promos;
        this.fullName = '';
    }
}