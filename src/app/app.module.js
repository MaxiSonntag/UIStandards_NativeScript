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
var first_tab_component_1 = require("./tabs/first_tab/first_tab.component");
var second_tab_component_1 = require("./tabs/second_tab/second_tab.component");
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
                first_tab_component_1.FirstTabComponent,
                second_tab_component_1.SecondTabComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9FQUFrRTtBQUNsRSx1RUFBcUU7QUFDckUsaUVBQStEO0FBQy9ELHdEQUFzRDtBQUN0RCxvRUFBaUU7QUFDakUsK0RBQTZEO0FBQzdELHdEQUFzRDtBQUN0RCw0RUFBeUU7QUFDekUsK0VBQTRFO0FBQzVFLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsaUZBQStFO0FBQy9FLDBGQUF3RjtBQUN4RixzR0FBb0c7QUFHcEcsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUNwRix5REFBMEU7QUFDMUUsNERBQWdGO0FBSWhGLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsa0ZBQWtGO0FBQ2xGLG1GQUFtRjtBQTZDbkY7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBM0NyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4QkFBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsd0NBQThCO2dCQUM5QiwrQkFBdUI7Z0JBQ3ZCLHNDQUE0QjtnQkFDNUIsbUNBQXlCO2dCQUN6QixzQ0FBNEI7YUFFL0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osc0NBQWlCO2dCQUNqQixvQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2dCQUNiLHlDQUFrQjtnQkFDbEIsOEJBQWE7Z0JBQ2IsdUNBQWlCO2dCQUNqQix5Q0FBa0I7Z0JBQ2xCLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLDBDQUFtQjtnQkFDbkIsZ0RBQXNCO2dCQUN0Qix3REFBMEI7YUFDN0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asa0NBQWU7Z0JBQ2YsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgQ29udGFjdHNDb21wb25lbnQgfSBmcm9tIFwiLi9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRhY3RzU2VydmljZSB9IGZyb20gXCIuL2NvbnRhY3RzL3NoYXJlZC9jb250YWN0cy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlR3JpZENvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQvaW1hZ2VfZ3JpZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlc1NlcnZpY2UgfSBmcm9tIFwiLi9ncmlkL3NoYXJlZC9pbWFnZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvdGFicy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZpcnN0VGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9maXJzdF90YWIvZmlyc3RfdGFiLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2Vjb25kVGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9zZWNvbmRfdGFiL3NlY29uZF90YWIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGFydHNDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFydHMvY2hhcnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRzQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dHMvaW5wdXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZXNDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy90aGVtZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2VzL2ltYWdlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NyZWVuQ29tcG9uZW50IH0gZnJvbSAnLi9zY3JlZW4vc2NyZWVuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY3JlZW5MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zY3JlZW4vc2NyZWVubGlzdC9zY3JlZW5saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY3JlZW5EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9zY3JlZW4vc2NyZWVuZGV0YWlscy9zY3JlZW5kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY3JlZW5EZXRhaWxzUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2NyZWVuL3NjcmVlbmRldGFpbHNwYWdlL3NjcmVlbmRldGFpbHNwYWdlLmNvbXBvbmVudCc7XG5cblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcblxuXG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlXG4gICAgICAgIFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgQ29udGFjdHNDb21wb25lbnQsXG4gICAgICAgIERldGFpbHNDb21wb25lbnQsXG4gICAgICAgIEVkaXRDb21wb25lbnQsXG4gICAgICAgIEltYWdlR3JpZENvbXBvbmVudCxcbiAgICAgICAgVGFic0NvbXBvbmVudCxcbiAgICAgICAgRmlyc3RUYWJDb21wb25lbnQsXG4gICAgICAgIFNlY29uZFRhYkNvbXBvbmVudCxcbiAgICAgICAgQ2hhcnRzQ29tcG9uZW50LFxuICAgICAgICBJbnB1dHNDb21wb25lbnQsXG4gICAgICAgIFRoZW1lc0NvbXBvbmVudCxcbiAgICAgICAgSW1hZ2VzQ29tcG9uZW50LFxuICAgICAgICBTY3JlZW5Db21wb25lbnQsXG4gICAgICAgIFNjcmVlbkxpc3RDb21wb25lbnQsXG4gICAgICAgIFNjcmVlbkRldGFpbHNDb21wb25lbnQsXG4gICAgICAgIFNjcmVlbkRldGFpbHNQYWdlQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29udGFjdHNTZXJ2aWNlLFxuICAgICAgICBJbWFnZXNTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19