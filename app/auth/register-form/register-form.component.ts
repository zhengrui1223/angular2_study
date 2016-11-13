import { Component } from '@angular/core';
import {Router} from "@angular/router";

import {User} from "../../core/user";
import {AuthService} from "../services/auth.service";

@Component({
    moduleId: module.id,
    selector: "register",
    templateUrl: "./register.form.html"
})

export class RegisterFormComponent{
    model : User;
    message : any;
    active : boolean = true;
    countries: Object[];
    constructor(
        private authService : AuthService,
        private router: Router
    ){
        this.model = new User();
        this.countries = [
            "china",
            "usa",
            "england"
        ]
    }

    register(): void{
        this.authService
            .register(this.model)
            .subscribe(isSuccess => {
                if(isSuccess){
                    // this.active = false;
                    // setTimeout(() => this.active = true, 0);
                    this.router.navigate(['/home'])
                }else {
                    this.active = false;
                    this.model = new User();
                    this.message = "很遗憾,注册失败,请重新注册";
                    setTimeout(() => this.active = true, 0);
                }
            });
    }
}