"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var images_service_1 = require("./shared/images.service");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(imagesService, routerExtensions, page) {
        this.imagesService = imagesService;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.images = [];
        this.columns = 0;
    }
    ImagesComponent.prototype.ngOnInit = function () {
        this.images = this.imagesService.getContacts();
    };
    ImagesComponent.prototype.ngAfterViewInit = function () {
        //const sideDrawer = <RadSideDrawer>app.getRootView();
        //sideDrawer.gesturesEnabled = false
    };
    ImagesComponent.prototype.onOpenCharts = function () {
        this.routerExtensions.navigate(["charts"]);
    };
    ImagesComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = this.page.parent.parent;
        sideDrawer.showDrawer();
    };
    ImagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'images',
            templateUrl: 'images.component.html',
            styleUrls: ['images.component.css'],
            providers: [images_service_1.ImagesService]
        }),
        __metadata("design:paramtypes", [images_service_1.ImagesService, router_1.RouterExtensions, page_1.Page])
    ], ImagesComponent);
    return ImagesComponent;
}());
exports.ImagesComponent = ImagesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsMERBQXdEO0FBQ3hELHNEQUErRDtBQUcvRCxzREFBcUQ7QUFVckQ7SUFJQyx5QkFBb0IsYUFBNEIsRUFBVSxnQkFBa0MsRUFBVSxJQUFVO1FBQTVGLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFIaEgsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQVcsQ0FBQyxDQUFBO0lBRWlHLENBQUM7SUFFckgsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUNDLHNEQUFzRDtRQUN0RCxvQ0FBb0M7SUFDckMsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsMkNBQWlCLEdBQWpCO1FBQ08sSUFBTSxVQUFVLEdBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMxRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQXRCUSxlQUFlO1FBUjNCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzFCLENBQUM7eUNBTWtDLDhCQUFhLEVBQTRCLHlCQUFnQixFQUFnQixXQUFJO09BSnBHLGVBQWUsQ0F1QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEltYWdlcyB9IGZyb20gJy4vc2hhcmVkL2ltYWdlcy5tb2RlbCc7XG5pbXBvcnQgeyBJbWFnZXNTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvaW1hZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdpbWFnZXMnLFxuXHR0ZW1wbGF0ZVVybDogJ2ltYWdlcy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWydpbWFnZXMuY29tcG9uZW50LmNzcyddLFxuXHRwcm92aWRlcnM6IFtJbWFnZXNTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEltYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGltYWdlczogSW1hZ2VzW10gPSBbXTtcblx0Y29sdW1uczogbnVtYmVyID0gMFxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VzU2VydmljZTogSW1hZ2VzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaW1hZ2VzID0gdGhpcy5pbWFnZXNTZXJ2aWNlLmdldENvbnRhY3RzKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cdFx0Ly9jb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0Ly9zaWRlRHJhd2VyLmdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlXG5cdH1cblxuXHRvbk9wZW5DaGFydHMoKXtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiY2hhcnRzXCJdKVxuXHR9XG5cblx0b25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj50aGlzLnBhZ2UucGFyZW50LnBhcmVudDtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufSJdfQ==