import { Component } from '@angular/core';
import {User} from "../../core/user";

@Component({
    moduleId: module.id,
    selector: "register",
    templateUrl: "./register.form.html"
})

export class RegisterFormComponent{
    model = new User( "1","Jerry","Jerry.Zheng@movit-tech.com","123456");
    constructor(){}
}