import { Component, OnInit } from '@angular/core';
import {Contact} from "./Contact";
import {ContactService} from "./contact.service";

@Component({
    moduleId: module.id,
    selector: "contact",
    templateUrl: "./contact.html"
})

export class ContactComponent implements OnInit{
    contactColumns : Object[];
    contacts : Contact[];
    createContact : Contact = {
        contactId : "",
        customerName : "",
        immediateSupervisor : "",
        job : "",
        department : "",
        email : "",
        telephone : "",
        mobilePhone : ""
    };

    constructor(private contactService : ContactService){}

    ngOnInit():void {
        this.getContacts();
        this.contactColumns = [
            {field: 'customerName', name: '客户名'},
            {field: 'immediateSupervisor', name: '直属上司'},
            {field: 'job', name: '工作'},
            {field: 'department', name: '部门'},
            {field: 'email', name: '邮箱'},
            {field: 'telephone', name: '电话'},
            {field: 'mobilePhone', name: '手机'}
        ];
    }

    addContact():void{
        alert(JSON.stringify(this.createContact));
        document.getElementById("contactModelClose").click();
        // $("#contactModelClose").click();
    }

    private getContacts(): void {
        this.contactService.getContacts().then(contacts => this.contacts = contacts);
    }
}