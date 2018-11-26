"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var contacts_component_1 = require("./contacts/contacts.component");
var contacts_service_1 = require("./contacts/shared/contacts.service");
var details_component_1 = require("./details/details.component");
var edit_component_1 = require("./edit/edit.component");
var image_grid_component_1 = require("./grid/image_grid.component");
var images_service_1 = require("./grid/shared/images.service");
var tabs_component_1 = require("./tabs/tabs.component");
var charts_component_1 = require("./charts/charts.component");
var inputs_component_1 = require("./inputs/inputs.component");
var themes_component_1 = require("./themes/themes.component");
var images_component_1 = require("./images/images.component");
var screen_component_1 = require("./screen/screen.component");
var screenlist_component_1 = require("./screen/screenlist/screenlist.component");
var screendetails_component_1 = require("./screen/screendetails/screendetails.component");
var screendetailspage_component_1 = require("./screen/screendetailspage/screendetailspage.component");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var angular_3 = require("nativescript-ui-chart/angular");
var angular_4 = require("nativescript-ui-dataform/angular");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                app_routing_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                angular_2.NativeScriptUISideDrawerModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIListViewModule,
                angular_3.NativeScriptUIChartModule,
                angular_4.NativeScriptUIDataFormModule
            ],
            declarations: [
                app_component_1.AppComponent,
                contacts_component_1.ContactsComponent,
                details_component_1.DetailsComponent,
                edit_component_1.EditComponent,
                image_grid_component_1.ImageGridComponent,
                tabs_component_1.TabsComponent,
                charts_component_1.ChartsComponent,
                inputs_component_1.InputsComponent,
                themes_component_1.ThemesComponent,
                images_component_1.ImagesComponent,
                screen_component_1.ScreenComponent,
                screenlist_component_1.ScreenListComponent,
                screendetails_component_1.ScreenDetailsComponent,
                screendetailspage_component_1.ScreenDetailsPageComponent
            ],
            providers: [
                contacts_service_1.ContactsService,
                images_service_1.ImagesService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9FQUFrRTtBQUNsRSx1RUFBcUU7QUFDckUsaUVBQStEO0FBQy9ELHdEQUFzRDtBQUN0RCxvRUFBaUU7QUFDakUsK0RBQTZEO0FBQzdELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELGlGQUErRTtBQUMvRSwwRkFBd0Y7QUFDeEYsc0dBQW9HO0FBR3BHLDREQUFnRjtBQUNoRiw4REFBb0Y7QUFDcEYseURBQTBFO0FBQzFFLDREQUFnRjtBQUloRiwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLGtGQUFrRjtBQUNsRixtRkFBbUY7QUEyQ25GO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXpDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOEJBQWdCO2dCQUNoQix3Q0FBa0I7Z0JBQ2xCLHdDQUE4QjtnQkFDOUIsK0JBQXVCO2dCQUN2QixzQ0FBNEI7Z0JBQzVCLG1DQUF5QjtnQkFDekIsc0NBQTRCO2FBRS9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLHNDQUFpQjtnQkFDakIsb0NBQWdCO2dCQUNoQiw4QkFBYTtnQkFDYix5Q0FBa0I7Z0JBQ2xCLDhCQUFhO2dCQUNiLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLDBDQUFtQjtnQkFDbkIsZ0RBQXNCO2dCQUN0Qix3REFBMEI7YUFDN0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asa0NBQWU7Z0JBQ2YsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgQ29udGFjdHNDb21wb25lbnQgfSBmcm9tIFwiLi9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRhY3RzU2VydmljZSB9IGZyb20gXCIuL2NvbnRhY3RzL3NoYXJlZC9jb250YWN0cy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlR3JpZENvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQvaW1hZ2VfZ3JpZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlc1NlcnZpY2UgfSBmcm9tIFwiLi9ncmlkL3NoYXJlZC9pbWFnZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvdGFicy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENoYXJ0c0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnB1dHNDb21wb25lbnQgfSBmcm9tICcuL2lucHV0cy9pbnB1dHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZW1lc0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL3RoZW1lcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW1hZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY3JlZW5Db21wb25lbnQgfSBmcm9tICcuL3NjcmVlbi9zY3JlZW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNjcmVlbkxpc3RDb21wb25lbnQgfSBmcm9tICcuL3NjcmVlbi9zY3JlZW5saXN0L3NjcmVlbmxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFNjcmVlbkRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3NjcmVlbi9zY3JlZW5kZXRhaWxzL3NjcmVlbmRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFNjcmVlbkRldGFpbHNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zY3JlZW4vc2NyZWVuZGV0YWlsc3BhZ2Uvc2NyZWVuZGV0YWlsc3BhZ2UuY29tcG9uZW50JztcblxuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuXG5cblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGVcbiAgICAgICAgXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBDb250YWN0c0NvbXBvbmVudCxcbiAgICAgICAgRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgRWRpdENvbXBvbmVudCxcbiAgICAgICAgSW1hZ2VHcmlkQ29tcG9uZW50LFxuICAgICAgICBUYWJzQ29tcG9uZW50LFxuICAgICAgICBDaGFydHNDb21wb25lbnQsXG4gICAgICAgIElucHV0c0NvbXBvbmVudCxcbiAgICAgICAgVGhlbWVzQ29tcG9uZW50LFxuICAgICAgICBJbWFnZXNDb21wb25lbnQsXG4gICAgICAgIFNjcmVlbkNvbXBvbmVudCxcbiAgICAgICAgU2NyZWVuTGlzdENvbXBvbmVudCxcbiAgICAgICAgU2NyZWVuRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgU2NyZWVuRGV0YWlsc1BhZ2VDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb250YWN0c1NlcnZpY2UsXG4gICAgICAgIEltYWdlc1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=