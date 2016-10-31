import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector:"app-auth",
    templateUrl:"./auth.component.html",
    styleUrls: ['./auth.component.css']
})

export class AuthComponent{
    hidden : boolean;
    show(type){
        if(type == 'login'){
            this.hidden = false;
        }
        if(type == 'register'){
            this.hidden = true;
        }
    }
    constructor(){
        this.hidden = false;
    }
}