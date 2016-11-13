import {NgModule} from "@angular/core";
import {FormsModule}    from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";

import {NavComponent} from "./nav.component";
import {SideComponent} from "./side.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ],
    declarations: [NavComponent, SideComponent],
    exports: [
        NavComponent,
        SideComponent
    ]
})
export class NavModule {}