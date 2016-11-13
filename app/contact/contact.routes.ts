import {RouterModule} from "@angular/router";
import {ContactComponent} from "./contact.component";

const contactRoutes= [
    {
        path: 'contact',
        component: ContactComponent
    }
];

export default RouterModule.forChild(contactRoutes);