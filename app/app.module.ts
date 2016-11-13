import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {ButtonModule} from "primeng/components/button/button";
import {GrowlModule} from "primeng/components/growl/growl";
import {HttpModule} from "@angular/http";
import {HomeModule} from "./home/home.module";
import {AppComponent} from "./app.component";
import {ContactModule} from "./contact/contact.module";
import {AuthModule} from "./auth/auth.module";
import appRoutes from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ContactModule,
        TabViewModule,
        ButtonModule,
        GrowlModule,
        AuthModule,
        HomeModule,
        ContactModule,
        appRoutes
    ],
    providers:[],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}