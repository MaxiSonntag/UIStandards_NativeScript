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
var custom_component_1 = require("./custom/custom.component");
var custom_calendar_component_1 = require("./custom/custom_calendar/custom_calendar.component");
var web_component_1 = require("./web/web.component");
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
                screendetailspage_component_1.ScreenDetailsPageComponent,
                custom_component_1.CustomComponent,
                custom_calendar_component_1.CustomCalendarComponent,
                web_component_1.WebComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9FQUFrRTtBQUNsRSx1RUFBcUU7QUFDckUsaUVBQStEO0FBQy9ELHdEQUFzRDtBQUN0RCxvRUFBaUU7QUFDakUsK0RBQTZEO0FBQzdELHdEQUFzRDtBQUN0RCw0RUFBeUU7QUFDekUsK0VBQTRFO0FBQzVFLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsaUZBQStFO0FBQy9FLDBGQUF3RjtBQUN4RixzR0FBb0c7QUFDcEcsOERBQTREO0FBQzVELGdHQUE2RjtBQUM3RixxREFBbUQ7QUFHbkQsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUNwRix5REFBMEU7QUFDMUUsNERBQWdGO0FBSWhGLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsa0ZBQWtGO0FBQ2xGLG1GQUFtRjtBQWdEbkY7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBOUNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4QkFBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsd0NBQThCO2dCQUM5QiwrQkFBdUI7Z0JBQ3ZCLHNDQUE0QjtnQkFDNUIsbUNBQXlCO2dCQUN6QixzQ0FBNEI7YUFFL0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osc0NBQWlCO2dCQUNqQixvQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2dCQUNiLHlDQUFrQjtnQkFDbEIsOEJBQWE7Z0JBQ2IsdUNBQWlCO2dCQUNqQix5Q0FBa0I7Z0JBQ2xCLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLDBDQUFtQjtnQkFDbkIsZ0RBQXNCO2dCQUN0Qix3REFBMEI7Z0JBQzFCLGtDQUFlO2dCQUNmLG1EQUF1QjtnQkFDdkIsNEJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDUCxrQ0FBZTtnQkFDZiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBDb250YWN0c0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29udGFjdHNTZXJ2aWNlIH0gZnJvbSBcIi4vY29udGFjdHMvc2hhcmVkL2NvbnRhY3RzLnNlcnZpY2VcIjtcbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC9lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3JpZC9pbWFnZV9ncmlkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VzU2VydmljZSB9IGZyb20gXCIuL2dyaWQvc2hhcmVkL2ltYWdlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy90YWJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmlyc3RUYWJDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL2ZpcnN0X3RhYi9maXJzdF90YWIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWNvbmRUYWJDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL3NlY29uZF90YWIvc2Vjb25kX3RhYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IENoYXJ0c0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnB1dHNDb21wb25lbnQgfSBmcm9tICcuL2lucHV0cy9pbnB1dHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZW1lc0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL3RoZW1lcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW1hZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY3JlZW5Db21wb25lbnQgfSBmcm9tICcuL3NjcmVlbi9zY3JlZW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNjcmVlbkxpc3RDb21wb25lbnQgfSBmcm9tICcuL3NjcmVlbi9zY3JlZW5saXN0L3NjcmVlbmxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFNjcmVlbkRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3NjcmVlbi9zY3JlZW5kZXRhaWxzL3NjcmVlbmRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFNjcmVlbkRldGFpbHNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zY3JlZW4vc2NyZWVuZGV0YWlsc3BhZ2Uvc2NyZWVuZGV0YWlsc3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tL2N1c3RvbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbS9jdXN0b21fY2FsZW5kYXIvY3VzdG9tX2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWJDb21wb25lbnQgfSBmcm9tICcuL3dlYi93ZWIuY29tcG9uZW50JztcblxuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuXG5cblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGVcbiAgICAgICAgXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBDb250YWN0c0NvbXBvbmVudCxcbiAgICAgICAgRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgRWRpdENvbXBvbmVudCxcbiAgICAgICAgSW1hZ2VHcmlkQ29tcG9uZW50LFxuICAgICAgICBUYWJzQ29tcG9uZW50LFxuICAgICAgICBGaXJzdFRhYkNvbXBvbmVudCxcbiAgICAgICAgU2Vjb25kVGFiQ29tcG9uZW50LFxuICAgICAgICBDaGFydHNDb21wb25lbnQsXG4gICAgICAgIElucHV0c0NvbXBvbmVudCxcbiAgICAgICAgVGhlbWVzQ29tcG9uZW50LFxuICAgICAgICBJbWFnZXNDb21wb25lbnQsXG4gICAgICAgIFNjcmVlbkNvbXBvbmVudCxcbiAgICAgICAgU2NyZWVuTGlzdENvbXBvbmVudCxcbiAgICAgICAgU2NyZWVuRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgU2NyZWVuRGV0YWlsc1BhZ2VDb21wb25lbnQsXG4gICAgICAgIEN1c3RvbUNvbXBvbmVudCxcbiAgICAgICAgQ3VzdG9tQ2FsZW5kYXJDb21wb25lbnQsXG4gICAgICAgIFdlYkNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENvbnRhY3RzU2VydmljZSxcbiAgICAgICAgSW1hZ2VzU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==