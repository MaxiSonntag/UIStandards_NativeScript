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
var screen_component_1 = require("./screen/screen.component");
var screendetailspage_component_1 = require("./screen/screendetailspage/screendetailspage.component");
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
    { path: "images", component: images_component_1.ImagesComponent },
    { path: "screen", component: screen_component_1.ScreenComponent },
    { path: "screenDetails/:id", component: screendetailspage_component_1.ScreenDetailsPageComponent }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsb0VBQWtFO0FBQ2xFLGlFQUErRDtBQUMvRCx3REFBc0Q7QUFDdEQsb0VBQWlFO0FBRWpFLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsc0dBQW9HO0FBR3BHLElBQU0sTUFBTSxHQUFXO0lBQ25CLG9CQUFvQjtJQUNwQjs7OztVQUlNO0lBQ04sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN4RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUM7SUFDbkQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFDO0lBQzdDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUM7SUFDbkQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsd0RBQTBCLEVBQUU7Q0FFdkUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDb250YWN0c0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbWFnZUdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi9ncmlkL2ltYWdlX2dyaWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy90YWJzLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBDaGFydHNDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFydHMvY2hhcnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRzQ29tcG9uZW50IH0gZnJvbSBcIi4vaW5wdXRzL2lucHV0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRoZW1lc0NvbXBvbmVudCB9IGZyb20gXCIuL3RoZW1lcy90aGVtZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbWFnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2NyZWVuQ29tcG9uZW50IH0gZnJvbSBcIi4vc2NyZWVuL3NjcmVlbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNjcmVlbkRldGFpbHNQYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vc2NyZWVuL3NjcmVlbmRldGFpbHNwYWdlL3NjcmVlbmRldGFpbHNwYWdlLmNvbXBvbmVudFwiO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIC8vVW5jb21tZW50IGZvciBUYWJzXG4gICAgLyp7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL3RhYnNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJ0YWJzXCIsIGNvbXBvbmVudDogVGFic0NvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgeyBwYXRoOiBcImNvbnRhY3RzXCIsIGNvbXBvbmVudDogQ29udGFjdHNDb21wb25lbnQsIG91dGxldDogXCJjb250YWN0c1RhYlwiIH0sXG4gICAgICAgIHsgcGF0aDogXCJpbWFnZXNEcmF3ZXJcIiwgY29tcG9uZW50OiBJbWFnZXNEcmF3ZXJDb21wb25lbnQsIG91dGxldDogXCJpbWFnZXNEcmF3ZXJUYWJcIiB9LFxuICAgIF0gfSwqL1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvY29udGFjdHNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJjb250YWN0c1wiLCBjb21wb25lbnQ6IENvbnRhY3RzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImRldGFpbHMvOmlkXCIsIGNvbXBvbmVudDogRGV0YWlsc0NvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcImVkaXQvOmlkXCIsIGNvbXBvbmVudDogRWRpdENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcImltYWdlZ3JpZFwiLCBjb21wb25lbnQ6IEltYWdlR3JpZENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcImNoYXJ0c1wiLCBjb21wb25lbnQ6IENoYXJ0c0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpbnB1dHNcIiwgY29tcG9uZW50OiBJbnB1dHNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwidGhlbWVzXCIsIGNvbXBvbmVudDogVGhlbWVzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImltYWdlc1wiLCBjb21wb25lbnQ6IEltYWdlc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJzY3JlZW5cIiwgY29tcG9uZW50OiBTY3JlZW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwic2NyZWVuRGV0YWlscy86aWRcIiwgY29tcG9uZW50OiBTY3JlZW5EZXRhaWxzUGFnZUNvbXBvbmVudCB9XG4gICAgXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==