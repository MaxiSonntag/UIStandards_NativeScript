"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var images_service_1 = require("./shared/images.service");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var ImageGridComponent = /** @class */ (function () {
    function ImageGridComponent(imagesService, routerExtensions, page) {
        this.imagesService = imagesService;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.images = [];
        this.columns = 0;
    }
    ImageGridComponent.prototype.ngOnInit = function () {
        this.images = this.imagesService.getContacts();
    };
    ImageGridComponent.prototype.ngAfterViewInit = function () {
        //const sideDrawer = <RadSideDrawer>app.getRootView();
        //sideDrawer.gesturesEnabled = false
    };
    ImageGridComponent.prototype.onOpenCharts = function () {
        this.routerExtensions.navigate(["charts"]);
    };
    ImageGridComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = this.page.parent.parent;
        sideDrawer.showDrawer();
    };
    ImageGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'images',
            templateUrl: 'image_grid.component.html',
            styleUrls: ['image_grid.component.css'],
            providers: [images_service_1.ImagesService]
        }),
        __metadata("design:paramtypes", [images_service_1.ImagesService, router_1.RouterExtensions, page_1.Page])
    ], ImageGridComponent);
    return ImageGridComponent;
}());
exports.ImageGridComponent = ImageGridComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZV9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCwwREFBd0Q7QUFDeEQsc0RBQStEO0FBRy9ELHNEQUFxRDtBQVVyRDtJQUlDLDRCQUFvQixhQUE0QixFQUFVLGdCQUFrQyxFQUFVLElBQVU7UUFBNUYsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUhoSCxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxDQUFDLENBQUE7SUFFaUcsQ0FBQztJQUVySCxxQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCw0Q0FBZSxHQUFmO1FBQ0Msc0RBQXNEO1FBQ3RELG9DQUFvQztJQUNyQyxDQUFDO0lBRUQseUNBQVksR0FBWjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFRCw4Q0FBaUIsR0FBakI7UUFDTyxJQUFNLFVBQVUsR0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBdEJRLGtCQUFrQjtRQVI5QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUMxQixDQUFDO3lDQU1rQyw4QkFBYSxFQUE0Qix5QkFBZ0IsRUFBZ0IsV0FBSTtPQUpwRyxrQkFBa0IsQ0F1QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbWFnZXMgfSBmcm9tICcuL3NoYXJlZC9pbWFnZXMubW9kZWwnO1xuaW1wb3J0IHsgSW1hZ2VzU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2ltYWdlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaW1hZ2VzJyxcblx0dGVtcGxhdGVVcmw6ICdpbWFnZV9ncmlkLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ2ltYWdlX2dyaWQuY29tcG9uZW50LmNzcyddLFxuXHRwcm92aWRlcnM6IFtJbWFnZXNTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEltYWdlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGltYWdlczogSW1hZ2VzW10gPSBbXTtcblx0Y29sdW1uczogbnVtYmVyID0gMFxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VzU2VydmljZTogSW1hZ2VzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaW1hZ2VzID0gdGhpcy5pbWFnZXNTZXJ2aWNlLmdldENvbnRhY3RzKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cdFx0Ly9jb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0Ly9zaWRlRHJhd2VyLmdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlXG5cdH1cblxuXHRvbk9wZW5DaGFydHMoKXtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiY2hhcnRzXCJdKVxuXHR9XG5cblx0b25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj50aGlzLnBhZ2UucGFyZW50LnBhcmVudDtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufSJdfQ==