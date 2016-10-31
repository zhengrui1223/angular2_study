import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule }   from '@angular/forms';

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing";
import {AuthComponent} from "./auth/auth.component";
import {LoginFormComponent} from "./auth/login-form/login-form.component";
import {RegisterFormComponent} from "./auth/register-form/register-form.component";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [AppComponent,AuthComponent, LoginFormComponent, RegisterFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}