import {NgModule} from "@angular/core";
import {FormsModule}    from '@angular/forms';
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";

import homeRoutes from './home.routes';
import {NavModule} from "../nav/nav.module";
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        homeRoutes,
        NavModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {}