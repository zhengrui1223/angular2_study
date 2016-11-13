import { Injectable } from '@angular/core';
import {Contact} from "./Contact";
import {CONTACT} from "./mock-contact";

@Injectable()
export class ContactService{
    getContacts(): Promise<Contact[]>{
        return Promise.resolve(CONTACT);
    }
}