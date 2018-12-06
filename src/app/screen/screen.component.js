"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Platform = require("platform");
var router_1 = require("nativescript-angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("nativescript-cardview");
var page_1 = require("tns-core-modules/ui/page/page");
element_registry_1.registerElement('CardView', function () { return nativescript_cardview_1.CardView; });
// Get the smallest screen width
var minSize = Math.min(Platform.screen.mainScreen.heightDIPs, Platform.screen.mainScreen.widthDIPs);
var ScreenComponent = /** @class */ (function () {
    function ScreenComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.entry = 0;
    }
    ScreenComponent.prototype.ngOnInit = function () {
        this.availabeSpace = Platform.screen.mainScreen.widthDIPs / 3;
        this.callback = this.callbackFunction;
    };
    ScreenComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = this.page.parent.parent;
        sideDrawer.showDrawer();
    };
    ScreenComponent.prototype.callbackFunction = function (event) {
        if (minSize < 600) {
            this.routerExtensions.navigate(["screenDetails", event]);
        }
        else {
            this.entry = event;
        }
    };
    ScreenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'screen',
            templateUrl: (minSize < 600 ? "screen.component.html" : "screen.component.tablet.html"),
            styleUrls: ['./screen.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page])
    ], ScreenComponent);
    return ScreenComponent;
}());
exports.ScreenComponent = ScreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUNBQXFDO0FBQ3JDLHNEQUErRDtBQUMvRCwwRUFBd0U7QUFDeEUsK0RBQWlEO0FBQ2pELHNEQUFxRDtBQUVyRCxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsZ0NBQVEsRUFBUixDQUFRLENBQUMsQ0FBQztBQUU1QyxnQ0FBZ0M7QUFDaEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7QUFVdEc7SUFPQyx5QkFBb0IsZ0JBQWtDLEVBQVUsSUFBVTtRQUF0RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUgxRSxVQUFLLEdBQVcsQ0FBQyxDQUFBO0lBSWpCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFBO0lBQ3BDLENBQUM7SUFFRCwyQ0FBaUIsR0FBakI7UUFDTyxJQUFNLFVBQVUsR0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsMENBQWdCLEdBQWhCLFVBQWlCLEtBQWE7UUFFN0IsSUFBRyxPQUFPLEdBQUcsR0FBRyxFQUFDO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUN4RDthQUNHO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7U0FDbEI7SUFDRixDQUFDO0lBNUJXLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsOEJBQThCLENBQUM7WUFDdkYsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQzt5Q0FTcUMseUJBQWdCLEVBQWdCLFdBQUk7T0FQOUQsZUFBZSxDQStCM0I7SUFBRCxzQkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcbmltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcmR2aWV3JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xucmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IENhcmRWaWV3KTtcblxuLy8gR2V0IHRoZSBzbWFsbGVzdCBzY3JlZW4gd2lkdGhcbmNvbnN0IG1pblNpemUgPSBNYXRoLm1pbihQbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzLCBQbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMpO1xuXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3NjcmVlbicsXG5cdHRlbXBsYXRlVXJsOiAobWluU2l6ZSA8IDYwMCA/IFwic2NyZWVuLmNvbXBvbmVudC5odG1sXCIgOiBcInNjcmVlbi5jb21wb25lbnQudGFibGV0Lmh0bWxcIiksXG5cdHN0eWxlVXJsczogWycuL3NjcmVlbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRcblxuXHRjYWxsYmFjayA6IEZ1bmN0aW9uXG5cdGVudHJ5OiBudW1iZXIgPSAwXG5cdGF2YWlsYWJlU3BhY2U6IG51bWJlclxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IFxuXHR9XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdHRoaXMuYXZhaWxhYmVTcGFjZSA9IFBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDNcblx0XHR0aGlzLmNhbGxiYWNrPXRoaXMuY2FsbGJhY2tGdW5jdGlvblxuXHR9XG5cblx0b25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj50aGlzLnBhZ2UucGFyZW50LnBhcmVudDtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG5cdH1cblx0XG5cdGNhbGxiYWNrRnVuY3Rpb24oZXZlbnQ6IG51bWJlcil7XG5cdFx0XG5cdFx0aWYobWluU2l6ZSA8IDYwMCl7XG5cdFx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic2NyZWVuRGV0YWlsc1wiLCBldmVudF0pXG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHR0aGlzLmVudHJ5ID0gZXZlbnRcblx0XHR9XG5cdH1cblxuXG59XG4iXX0=