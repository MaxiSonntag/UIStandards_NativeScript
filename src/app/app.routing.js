"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var contacts_component_1 = require("./contacts/contacts.component");
var details_component_1 = require("./details/details.component");
var edit_component_1 = require("./edit/edit.component");
var image_grid_component_1 = require("./grid/image_grid.component");
var charts_component_1 = require("./charts/charts.component");
var inputs_component_1 = require("./inputs/inputs.component");
var themes_component_1 = require("./themes/themes.component");
var images_component_1 = require("./images/images.component");
var routes = [
    //Uncomment for Tabs
    /*{ path: "", redirectTo: "/tabs", pathMatch: "full" },
    { path: "tabs", component: TabsComponent, children: [
        { path: "contacts", component: ContactsComponent, outlet: "contactsTab" },
        { path: "imagesDrawer", component: ImagesDrawerComponent, outlet: "imagesDrawerTab" },
    ] },*/
    { path: "", redirectTo: "/contacts", pathMatch: "full" },
    { path: "contacts", component: contacts_component_1.ContactsComponent },
    { path: "details/:id", component: details_component_1.DetailsComponent },
    { path: "edit/:id", component: edit_component_1.EditComponent },
    { path: "imagegrid", component: image_grid_component_1.ImageGridComponent },
    { path: "charts", component: charts_component_1.ChartsComponent },
    { path: "inputs", component: inputs_component_1.InputsComponent },
    { path: "themes", component: themes_component_1.ThemesComponent },
    { path: "images", component: images_component_1.ImagesComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsb0VBQWtFO0FBQ2xFLGlFQUErRDtBQUMvRCx3REFBc0Q7QUFDdEQsb0VBQWlFO0FBRWpFLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELDhEQUE0RDtBQUc1RCxJQUFNLE1BQU0sR0FBVztJQUNuQixvQkFBb0I7SUFDcEI7Ozs7VUFJTTtJQUNOLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDeEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO0lBQ25ELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztJQUM3QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFDO0lBQ25ELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtDQUVqRCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IENvbnRhY3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlR3JpZENvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQvaW1hZ2VfZ3JpZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL3RhYnMuY29tcG9uZW50XCJcbmltcG9ydCB7IENoYXJ0c0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbnB1dHNDb21wb25lbnQgfSBmcm9tIFwiLi9pbnB1dHMvaW5wdXRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGhlbWVzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGhlbWVzL3RoZW1lcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuL2ltYWdlcy9pbWFnZXMuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgLy9VbmNvbW1lbnQgZm9yIFRhYnNcbiAgICAvKnsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvdGFic1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInRhYnNcIiwgY29tcG9uZW50OiBUYWJzQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6IFwiY29udGFjdHNcIiwgY29tcG9uZW50OiBDb250YWN0c0NvbXBvbmVudCwgb3V0bGV0OiBcImNvbnRhY3RzVGFiXCIgfSxcbiAgICAgICAgeyBwYXRoOiBcImltYWdlc0RyYXdlclwiLCBjb21wb25lbnQ6IEltYWdlc0RyYXdlckNvbXBvbmVudCwgb3V0bGV0OiBcImltYWdlc0RyYXdlclRhYlwiIH0sXG4gICAgXSB9LCovXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9jb250YWN0c1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImNvbnRhY3RzXCIsIGNvbXBvbmVudDogQ29udGFjdHNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZGV0YWlscy86aWRcIiwgY29tcG9uZW50OiBEZXRhaWxzQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiZWRpdC86aWRcIiwgY29tcG9uZW50OiBFZGl0Q29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiaW1hZ2VncmlkXCIsIGNvbXBvbmVudDogSW1hZ2VHcmlkQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiY2hhcnRzXCIsIGNvbXBvbmVudDogQ2hhcnRzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImlucHV0c1wiLCBjb21wb25lbnQ6IElucHV0c0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJ0aGVtZXNcIiwgY29tcG9uZW50OiBUaGVtZXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaW1hZ2VzXCIsIGNvbXBvbmVudDogSW1hZ2VzQ29tcG9uZW50IH1cbiAgICBcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19