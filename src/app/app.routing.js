"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var contacts_component_1 = require("./contacts/contacts.component");
var details_component_1 = require("./details/details.component");
var edit_component_1 = require("./edit/edit.component");
var images_component_1 = require("./images/images.component");
var charts_component_1 = require("./charts/charts.component");
var inputs_component_1 = require("./inputs/inputs.component");
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
    { path: "images", component: images_component_1.ImagesComponent },
    { path: "charts", component: charts_component_1.ChartsComponent },
    { path: "inputs", component: inputs_component_1.InputsComponent }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsb0VBQWtFO0FBQ2xFLGlFQUErRDtBQUMvRCx3REFBc0Q7QUFDdEQsOERBQTREO0FBRTVELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFHNUQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsb0JBQW9CO0lBQ3BCOzs7O1VBSU07SUFDTixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQztJQUNuRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7SUFDN0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0lBQzdDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7Q0FFakQsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDb250YWN0c0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbWFnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvdGFicy5jb21wb25lbnRcIlxuaW1wb3J0IHsgQ2hhcnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhcnRzL2NoYXJ0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IElucHV0c0NvbXBvbmVudCB9IGZyb20gXCIuL2lucHV0cy9pbnB1dHMuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgLy9VbmNvbW1lbnQgZm9yIFRhYnNcbiAgICAvKnsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvdGFic1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInRhYnNcIiwgY29tcG9uZW50OiBUYWJzQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6IFwiY29udGFjdHNcIiwgY29tcG9uZW50OiBDb250YWN0c0NvbXBvbmVudCwgb3V0bGV0OiBcImNvbnRhY3RzVGFiXCIgfSxcbiAgICAgICAgeyBwYXRoOiBcImltYWdlc0RyYXdlclwiLCBjb21wb25lbnQ6IEltYWdlc0RyYXdlckNvbXBvbmVudCwgb3V0bGV0OiBcImltYWdlc0RyYXdlclRhYlwiIH0sXG4gICAgXSB9LCovXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9jb250YWN0c1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImNvbnRhY3RzXCIsIGNvbXBvbmVudDogQ29udGFjdHNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZGV0YWlscy86aWRcIiwgY29tcG9uZW50OiBEZXRhaWxzQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiZWRpdC86aWRcIiwgY29tcG9uZW50OiBFZGl0Q29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiaW1hZ2VzXCIsIGNvbXBvbmVudDogSW1hZ2VzQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwiY2hhcnRzXCIsIGNvbXBvbmVudDogQ2hhcnRzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImlucHV0c1wiLCBjb21wb25lbnQ6IElucHV0c0NvbXBvbmVudCB9XG4gICAgXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==