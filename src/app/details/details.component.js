"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("../contacts/shared/contacts.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(contactService, route, routerExtensions) {
        this.contactService = contactService;
        this.route = route;
        this.routerExtensions = routerExtensions;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        this.contact = this.contactService.getContact(id);
        this.image = "~/sample_images/avatar.png";
    };
    DetailsComponent.prototype.ngAfterViewInit = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.gesturesEnabled = false;
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.gesturesEnabled = true;
    };
    DetailsComponent.prototype.onBackPressed = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.gesturesEnabled = true;
        this.routerExtensions.backToPreviousPage();
    };
    DetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.css']
        }),
        __metadata("design:paramtypes", [contacts_service_1.ContactsService, router_1.ActivatedRoute, router_2.RouterExtensions])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSx3RUFBc0U7QUFDdEUsMENBQWlEO0FBRWpELHNEQUEwRTtBQUUxRSxrREFBb0Q7QUFXcEQ7SUFNQywwQkFBb0IsY0FBK0IsRUFBVSxLQUFxQixFQUFVLGdCQUFrQztRQUExRyxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRWxJLG1DQUFRLEdBQVI7UUFDQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUE0QixDQUFBO0lBQzFDLENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0MsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQTtJQUNuQyxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNDLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUE7SUFDbEMsQ0FBQztJQUlELHdDQUFhLEdBQWI7UUFDQyxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQzNDLENBQUM7SUE5QlcsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN0QyxDQUFDO3lDQVFtQyxrQ0FBZSxFQUFpQix1QkFBYyxFQUE0Qix5QkFBZ0I7T0FObEgsZ0JBQWdCLENBZ0M1QjtJQUFELHVCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udGFjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vY29udGFjdHMvc2hhcmVkL2NvbnRhY3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4uL2NvbnRhY3RzL3NoYXJlZC9jb250YWN0cy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnZGV0YWlscycsXG5cdHRlbXBsYXRlVXJsOiAnLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZGV0YWlscy5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgY29udGFjdDogQ29udGFjdFxuXHRwcml2YXRlIGltYWdlOiBhbnlcblx0XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb250YWN0U2VydmljZTogQ29udGFjdHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG5cdG5nT25Jbml0KCkgeyBcblx0XHRjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl1cblx0XHR0aGlzLmNvbnRhY3QgPSB0aGlzLmNvbnRhY3RTZXJ2aWNlLmdldENvbnRhY3QoaWQpXG5cdFx0dGhpcy5pbWFnZSA9IFwifi9zYW1wbGVfaW1hZ2VzL2F2YXRhci5wbmdcIlxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXHRcdGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcblx0XHRzaWRlRHJhd2VyLmdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlXG5cdH1cblxuXHRuZ09uRGVzdHJveSgpe1xuXHRcdGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcblx0XHRzaWRlRHJhd2VyLmdlc3R1cmVzRW5hYmxlZCA9IHRydWVcblx0fVxuXG5cdFxuXG5cdG9uQmFja1ByZXNzZWQoKXtcblx0XHRjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0c2lkZURyYXdlci5nZXN0dXJlc0VuYWJsZWQgPSB0cnVlXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpXG5cdH1cblxufSJdfQ==