import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";

import contactRoutes from './contact.routes';
import {NavModule} from "../nav/nav.module";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        contactRoutes,
        NavModule
    ],
    providers: [ContactService],
    declarations: [
        ContactComponent
    ]
})

export class ContactModule{}