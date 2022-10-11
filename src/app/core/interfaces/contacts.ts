import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler";

export interface Contact {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
}

export const defaultContact:Contact = {
    firstName: "santiago",
    lastName: "crucianelli",
    phoneNumber: "3471624325",
    email: "santi128154@hotmail.com",
}

export interface ContactJsonPlaceholder {
    id?: number;
    name?: string;
    email?: string;
    phone?: string;
   
}
export const santiago:Contact = {
    firstName: "santiagoe",
    lastName: "crucianedlli",
    phoneNumber: "347162432544",
    email: "santi128154@hotmail.comdd",
}