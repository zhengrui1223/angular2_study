import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth.component";

const authRoutes= [
    {path: 'auth', component: AuthComponent}
];

export default RouterModule.forChild(authRoutes);