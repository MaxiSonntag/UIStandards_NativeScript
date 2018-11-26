"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("tns-core-modules/application");
var router_2 = require("nativescript-angular/router");
var ScreenDetailsPageComponent = /** @class */ (function () {
    function ScreenDetailsPageComponent(route, routerExtensions) {
        this.route = route;
        this.routerExtensions = routerExtensions;
    }
    ScreenDetailsPageComponent.prototype.ngOnInit = function () {
        this.entry = this.route.snapshot.params["id"];
    };
    ScreenDetailsPageComponent.prototype.ngAfterViewInit = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.gesturesEnabled = false;
    };
    ScreenDetailsPageComponent.prototype.ngOnDestroy = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.gesturesEnabled = true;
    };
    ScreenDetailsPageComponent.prototype.onBackPressed = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.gesturesEnabled = true;
        this.routerExtensions.backToPreviousPage();
    };
    ScreenDetailsPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'screendetailspage',
            templateUrl: './screendetailspage.component.html',
            styleUrls: ['./screendetailspage.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions])
    ], ScreenDetailsPageComponent);
    return ScreenDetailsPageComponent;
}());
exports.ScreenDetailsPageComponent = ScreenDetailsPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuZGV0YWlsc3BhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NyZWVuZGV0YWlsc3BhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUVqRCxrREFBb0Q7QUFDcEQsc0RBQStEO0FBUy9EO0lBSUMsb0NBQW9CLEtBQXFCLEVBQVUsZ0JBQWtDO1FBQWpFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFMUYsNkNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRTlDLENBQUM7SUFFRCxvREFBZSxHQUFmO1FBQ0MsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQTtJQUNuQyxDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNDLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUE7SUFDbEMsQ0FBQztJQUlELGtEQUFhLEdBQWI7UUFDQyxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQzNDLENBQUM7SUEzQlcsMEJBQTBCO1FBUHRDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO1NBQ2hELENBQUM7eUNBTTBCLHVCQUFjLEVBQTRCLHlCQUFnQjtPQUp6RSwwQkFBMEIsQ0E0QnRDO0lBQUQsaUNBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3NjcmVlbmRldGFpbHNwYWdlJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NjcmVlbmRldGFpbHNwYWdlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc2NyZWVuZGV0YWlsc3BhZ2UuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2NyZWVuRGV0YWlsc1BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGVudHJ5IDogbnVtYmVyXG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5lbnRyeSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl1cblxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXHRcdGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcblx0XHRzaWRlRHJhd2VyLmdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlXG5cdH1cblxuXHRuZ09uRGVzdHJveSgpe1xuXHRcdGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcblx0XHRzaWRlRHJhd2VyLmdlc3R1cmVzRW5hYmxlZCA9IHRydWVcblx0fVxuXG5cdFxuXG5cdG9uQmFja1ByZXNzZWQoKXtcblx0XHRjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0c2lkZURyYXdlci5nZXN0dXJlc0VuYWJsZWQgPSB0cnVlXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpXG5cdH1cbn0iXX0=