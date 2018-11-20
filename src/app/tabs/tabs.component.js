"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(routerExtensions, route, page) {
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.page = page;
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.routerExtensions.navigate([{ outlets: { contactsTab: ["contacts"], imagesDrawerTab: ["imagesDrawer"] } }], { relativeTo: this.route });
    };
    TabsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, router_2.ActivatedRoute, page_1.Page])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsMENBQWlEO0FBQ2pELHNEQUFxRDtBQVNyRDtJQUVDLHVCQUFvQixnQkFBa0MsRUFBVSxLQUFxQixFQUFVLElBQVU7UUFBckYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFOUcsZ0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM3SSxDQUFDO0lBUFcsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDbkMsQ0FBQzt5Q0FJcUMseUJBQWdCLEVBQWlCLHVCQUFjLEVBQWdCLFdBQUk7T0FGN0YsYUFBYSxDQVF6QjtJQUFELG9CQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICd0YWJzJyxcblx0dGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IGNvbnRhY3RzVGFiOiBbXCJjb250YWN0c1wiXSwgaW1hZ2VzRHJhd2VyVGFiOiBbXCJpbWFnZXNEcmF3ZXJcIl0gfSB9XSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xuXHR9XG59Il19