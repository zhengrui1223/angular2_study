import {Component} from "@angular/core";
import {User} from "../../core/user";

@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "./login.form.html"
})
/**
 * id: string;
 name: string;
 email: string;
 password: string;
 */
export class LoginFormComponent{
    model = new User( "1","Jerry","Jerry.Zheng@movit-tech.com","123456");
    constructor(){
    }
}