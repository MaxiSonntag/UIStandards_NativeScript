import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ContactsComponent } from "./contacts/contacts.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";
import { ImageGridComponent } from "./grid/image_grid.component";
import { TabsComponent } from "./tabs/tabs.component"
import { ChartsComponent } from "./charts/charts.component";
import { InputsComponent } from "./inputs/inputs.component";
import { ThemesComponent } from "./themes/themes.component";
import { ImagesComponent } from "./images/images.component";
import { ScreenComponent } from "./screen/screen.component";
import { ScreenDetailsPageComponent } from "./screen/screendetailspage/screendetailspage.component";


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
    { path: "imagegrid", component: ImageGridComponent},
    { path: "charts", component: ChartsComponent },
    { path: "inputs", component: InputsComponent },
    { path: "themes", component: ThemesComponent },
    { path: "images", component: ImagesComponent },
    { path: "screen", component: ScreenComponent },
    { path: "screenDetails/:id", component: ScreenDetailsPageComponent }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }