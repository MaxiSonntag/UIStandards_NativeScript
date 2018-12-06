"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var CustomComponent = /** @class */ (function () {
    function CustomComponent(page) {
        this.page = page;
    }
    CustomComponent.prototype.ngOnInit = function () {
    };
    CustomComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = this.page.parent.parent;
        sideDrawer.showDrawer();
    };
    CustomComponent.prototype.goback = function () { };
    CustomComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'custom',
            templateUrl: './custom.component.html',
            styleUrls: ['./custom.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], CustomComponent);
    return CustomComponent;
}());
exports.CustomComponent = CustomComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXFEO0FBVXJEO0lBR0MseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQyxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDJDQUFpQixHQUFqQjtRQUNPLElBQU0sVUFBVSxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBTSxHQUFOLGNBQVMsQ0FBQztJQWJFLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3JDLENBQUM7eUNBS3lCLFdBQUk7T0FIbEIsZUFBZSxDQWMzQjtJQUFELHNCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2N1c3RvbScsXG5cdHRlbXBsYXRlVXJsOiAnLi9jdXN0b20uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9jdXN0b20uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG5cdG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+dGhpcy5wYWdlLnBhcmVudC5wYXJlbnQ7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuXHR9XG5cblx0Z29iYWNrKCl7fVxufSJdfQ==