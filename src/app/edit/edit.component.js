"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var contacts_service_1 = require("../contacts/shared/contacts.service");
var page_1 = require("tns-core-modules/ui/page/page");
var EditComponent = /** @class */ (function () {
    function EditComponent(contactService, route, routerExtensions, page) {
        this.contactService = contactService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.page = page;
    }
    EditComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        this.originalContact = this.contactService.getContact(id);
        this.contact = { id: this.originalContact.id, name: this.originalContact.name, email: this.originalContact.email, template: this.originalContact.template };
    };
    EditComponent.prototype.ngAfterViewInit = function () {
        //const sideDrawer = <RadSideDrawer>app.getRootView();
        //sideDrawer.gesturesEnabled = false
    };
    EditComponent.prototype.backPressed = function () {
        //console.log(this.editText.nativeView)
        this.routerExtensions.backToPreviousPage();
    };
    EditComponent.prototype.savePressed = function () {
        this.contactService.setContact(this.contact);
        this.routerExtensions.backToPreviousPage();
    };
    EditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
        }),
        __metadata("design:paramtypes", [contacts_service_1.ContactsService, router_2.ActivatedRoute, router_1.RouterExtensions, page_1.Page])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSxzREFBK0Q7QUFDL0QsMENBQWlEO0FBQ2pELHdFQUFzRTtBQUl0RSxzREFBcUQ7QUFVckQ7SUFFQyx1QkFBb0IsY0FBK0IsRUFBVSxLQUFxQixFQUFVLGdCQUFrQyxFQUFVLElBQVU7UUFBOUgsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFNdkosZ0NBQVEsR0FBUjtRQUNDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUMsQ0FBQTtJQUMxSixDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNDLHNEQUFzRDtRQUN0RCxvQ0FBb0M7SUFDckMsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUE7SUFDM0MsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUMsQ0FBQztJQTNCVyxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNuQyxDQUFDO3lDQUltQyxrQ0FBZSxFQUFpQix1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBZ0IsV0FBSTtPQUZ0SSxhQUFhLENBNEJ6QjtJQUFELG9CQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbnRhY3RzU2VydmljZSB9IGZyb20gJy4uL2NvbnRhY3RzL3NoYXJlZC9jb250YWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuLi9jb250YWN0cy9zaGFyZWQvY29udGFjdHMubW9kZWwnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdlZGl0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2VkaXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9lZGl0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdFNlcnZpY2U6IENvbnRhY3RzU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuXHRwcml2YXRlIG9yaWdpbmFsQ29udGFjdDogQ29udGFjdFxuXHRwcml2YXRlIGNvbnRhY3Q6IENvbnRhY3Rcblx0cHJpdmF0ZSBlZGl0VGV4dDogVGV4dEZpZWxkXG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcblx0XHR0aGlzLm9yaWdpbmFsQ29udGFjdCA9IHRoaXMuY29udGFjdFNlcnZpY2UuZ2V0Q29udGFjdChpZCk7XG5cdFx0dGhpcy5jb250YWN0ID0ge2lkOiB0aGlzLm9yaWdpbmFsQ29udGFjdC5pZCwgbmFtZTogdGhpcy5vcmlnaW5hbENvbnRhY3QubmFtZSwgZW1haWw6IHRoaXMub3JpZ2luYWxDb250YWN0LmVtYWlsLCB0ZW1wbGF0ZTogdGhpcy5vcmlnaW5hbENvbnRhY3QudGVtcGxhdGV9XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cdFx0Ly9jb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0Ly9zaWRlRHJhd2VyLmdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlXG5cdH1cblxuXHRiYWNrUHJlc3NlZCgpe1xuXHRcdC8vY29uc29sZS5sb2codGhpcy5lZGl0VGV4dC5uYXRpdmVWaWV3KVxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKVxuXHR9XG5cblx0c2F2ZVByZXNzZWQoKXtcblx0XHR0aGlzLmNvbnRhY3RTZXJ2aWNlLnNldENvbnRhY3QodGhpcy5jb250YWN0KTtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG5cdH1cbn0iXX0=