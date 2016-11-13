import {RouterModule} from "@angular/router";

const appRoutes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path:'auth',
        loadChildren:'app/auth/auth.module'
    },
    {
        path: 'contact',
        loadChildren:'app/contact/contact.module'
    },
    {
        path: 'home',
        loadChildren:'app/home/home.module'
    }
]

export default RouterModule.forRoot(appRoutes);
