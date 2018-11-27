import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ContactsComponent } from "./contacts/contacts.component";
import { ContactsService } from "./contacts/shared/contacts.service";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";
import { ImageGridComponent } from "./grid/image_grid.component";
import { ImagesService } from "./grid/shared/images.service";
import { TabsComponent } from "./tabs/tabs.component";
import { FirstTabComponent } from "./tabs/first_tab/first_tab.component";
import { SecondTabComponent } from "./tabs/second_tab/second_tab.component";
import { ChartsComponent } from "./charts/charts.component";
import { InputsComponent } from './inputs/inputs.component';
import { ThemesComponent } from './themes/themes.component';
import { ImagesComponent } from './images/images.component';
import { ScreenComponent } from './screen/screen.component';
import { ScreenListComponent } from './screen/screenlist/screenlist.component';
import { ScreenDetailsComponent } from './screen/screendetails/screendetails.component';
import { ScreenDetailsPageComponent } from './screen/screendetailspage/screendetailspage.component';


import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";



// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule
        
    ],
    declarations: [
        AppComponent,
        ContactsComponent,
        DetailsComponent,
        EditComponent,
        ImageGridComponent,
        TabsComponent,
        FirstTabComponent,
        SecondTabComponent,
        ChartsComponent,
        InputsComponent,
        ThemesComponent,
        ImagesComponent,
        ScreenComponent,
        ScreenListComponent,
        ScreenDetailsComponent,
        ScreenDetailsPageComponent
    ],
    providers: [
        ContactsService,
        ImagesService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
