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
import { FirstTabComponent } from "./tabs/first_tab/first_tab.component";
import { SecondTabComponent } from "./tabs/second_tab/second_tab.component";
import { CustomComponent } from "./custom/custom.component";
import { WebComponent } from "./web/web.component";
import { MapComponent } from "./map/map.component";


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
    { path: "tabs", component: TabsComponent},
        { path: "firstTab", component: FirstTabComponent, outlet: "firstTab" },
        { path: "secondTab", component: SecondTabComponent, outlet: "secondTab" },
    { path: "charts", component: ChartsComponent },
    { path: "inputs", component: InputsComponent },
    { path: "themes", component: ThemesComponent },
    { path: "images", component: ImagesComponent },
    { path: "screen", component: ScreenComponent },
    { path: "screenDetails/:id", component: ScreenDetailsPageComponent },
    { path: "custom", component: CustomComponent },
    { path: "web", component: WebComponent },
    { path: "map", component: MapComponent }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }