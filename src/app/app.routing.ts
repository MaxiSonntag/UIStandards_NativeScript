import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ContactsComponent } from "./contacts/contacts.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";
import { ImagesComponent } from "./images/images.component";
import { TabsComponent } from "./tabs/tabs.component"
import { ChartsComponent } from "./charts/charts.component";
import { InputsComponent } from "./inputs/inputs.component";


const routes: Routes = [
    //Uncomment for Tabs
    /*{ path: "", redirectTo: "/tabs", pathMatch: "full" },
    { path: "tabs", component: TabsComponent, children: [
        { path: "contacts", component: ContactsComponent, outlet: "contactsTab" },
        { path: "imagesDrawer", component: ImagesDrawerComponent, outlet: "imagesDrawerTab" },
    ] },*/
    { path: "", redirectTo: "/contacts", pathMatch: "full" },
    { path: "contacts", component: ContactsComponent },
    { path: "details/:id", component: DetailsComponent},
    { path: "edit/:id", component: EditComponent},
    { path: "images", component: ImagesComponent},
    { path: "charts", component: ChartsComponent },
    { path: "inputs", component: InputsComponent }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }