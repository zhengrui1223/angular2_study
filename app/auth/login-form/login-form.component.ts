import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {User} from "../../core/user";
import {AuthService} from "../services/auth.service";

@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "./login.form.html"
})
/**
 * id: string;
 name: string;
 email: string;
 passWord: string;
 */
export class LoginFormComponent{
    model : User;
    message : any;
    active = true;
    testCountry : any;
    countries: Object[];

    constructor(
                private authService : AuthService,
                private router: Router
    ){
        this.model = new User();
        this.message = null;
        this.countries = [
            "china",
            "usa",
            "jpan"
        ]
    }

    login(): void{
        // this.authService.login(this.model)
        //     .subscribe(user => this.model = user);

        this.authService
            .login(this.model)
            .subscribe(isLoggedIn => {
                if (isLoggedIn){
                    this.router.navigate(['/home'])
                } else {
                    this.active = false;
                    this.model = new User();
                    this.message = "用户名或密码错误,请重新登录";
                    setTimeout(() => this.active = true, 0);
                    this.router.navigate(['/auth']);
                }
            });
    }
}