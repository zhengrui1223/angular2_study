import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    moduleId : module.id,
    selector : "app-nav",
    templateUrl : "./nav.html",
    styleUrls : ['./nav.css']
})

export class NavComponent{
    constructor(private router : Router){}

    logout() : void {
        this.router.navigate(['/auth']);
    }
}