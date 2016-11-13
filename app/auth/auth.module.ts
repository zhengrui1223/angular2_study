import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {ButtonModule} from "primeng/components/button/button";
import {GrowlModule} from "primeng/components/growl/growl";

import {AuthComponent} from "./auth.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {AuthService} from "./services/auth.service";

import authRoutes from './auth.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        TabViewModule,
        ButtonModule,
        GrowlModule,
        authRoutes
    ],
    providers: [AuthService],
    declarations: [AuthComponent, LoginFormComponent, RegisterFormComponent]
})

export class AuthModule{}