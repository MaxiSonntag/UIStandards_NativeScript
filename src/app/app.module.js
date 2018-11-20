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
var images_component_1 = require("./images/images.component");
var images_service_1 = require("./images/shared/images.service");
var tabs_component_1 = require("./tabs/tabs.component");
var charts_component_1 = require("./charts/charts.component");
var inputs_component_1 = require("./inputs/inputs.component");
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
                images_component_1.ImagesComponent,
                tabs_component_1.TabsComponent,
                charts_component_1.ChartsComponent,
                inputs_component_1.InputsComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9FQUFrRTtBQUNsRSx1RUFBcUU7QUFDckUsaUVBQStEO0FBQy9ELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFDNUQsaUVBQStEO0FBQy9ELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFDNUQsOERBQTREO0FBRzVELDREQUFnRjtBQUNoRiw4REFBb0Y7QUFDcEYseURBQTBFO0FBQzFFLDREQUFnRjtBQUloRiwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLGtGQUFrRjtBQUNsRixtRkFBbUY7QUFxQ25GO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQW5DckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOEJBQWdCO2dCQUNoQix3Q0FBa0I7Z0JBQ2xCLHdDQUE4QjtnQkFDOUIsK0JBQXVCO2dCQUN2QixzQ0FBNEI7Z0JBQzVCLG1DQUF5QjtnQkFDekIsc0NBQTRCO2FBRS9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLHNDQUFpQjtnQkFDakIsb0NBQWdCO2dCQUNoQiw4QkFBYTtnQkFDYixrQ0FBZTtnQkFDZiw4QkFBYTtnQkFDYixrQ0FBZTtnQkFDZixrQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxrQ0FBZTtnQkFDZiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBDb250YWN0c0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29udGFjdHNTZXJ2aWNlIH0gZnJvbSBcIi4vY29udGFjdHMvc2hhcmVkL2NvbnRhY3RzLnNlcnZpY2VcIjtcbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC9lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vaW1hZ2VzL2ltYWdlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlc1NlcnZpY2UgfSBmcm9tIFwiLi9pbWFnZXMvc2hhcmVkL2ltYWdlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy90YWJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhcnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhcnRzL2NoYXJ0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IElucHV0c0NvbXBvbmVudCB9IGZyb20gJy4vaW5wdXRzL2lucHV0cy5jb21wb25lbnQnO1xuXG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5cblxuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZVxuICAgICAgICBcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIENvbnRhY3RzQ29tcG9uZW50LFxuICAgICAgICBEZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBFZGl0Q29tcG9uZW50LFxuICAgICAgICBJbWFnZXNDb21wb25lbnQsXG4gICAgICAgIFRhYnNDb21wb25lbnQsXG4gICAgICAgIENoYXJ0c0NvbXBvbmVudCxcbiAgICAgICAgSW5wdXRzQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29udGFjdHNTZXJ2aWNlLFxuICAgICAgICBJbWFnZXNTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19