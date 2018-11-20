"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var contacts_service_1 = require("../contacts/shared/contacts.service");
var EditComponent = /** @class */ (function () {
    function EditComponent(contactService, route, routerExtensions) {
        this.contactService = contactService;
        this.route = route;
        this.routerExtensions = routerExtensions;
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
            templateUrl: './edit.component.xml',
            styleUrls: ['./edit.component.css']
        }),
        __metadata("design:paramtypes", [contacts_service_1.ContactsService, router_2.ActivatedRoute, router_1.RouterExtensions])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSxzREFBK0Q7QUFDL0QsMENBQWlEO0FBQ2pELHdFQUFzRTtBQVl0RTtJQUVDLHVCQUFvQixjQUErQixFQUFVLEtBQXFCLEVBQVUsZ0JBQWtDO1FBQTFHLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFLbkksZ0NBQVEsR0FBUjtRQUNDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUMsQ0FBQTtJQUMxSixDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNDLHNEQUFzRDtRQUN0RCxvQ0FBb0M7SUFDckMsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBekJXLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ25DLENBQUM7eUNBSW1DLGtDQUFlLEVBQWlCLHVCQUFjLEVBQTRCLHlCQUFnQjtPQUZsSCxhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbnRhY3RzU2VydmljZSB9IGZyb20gJy4uL2NvbnRhY3RzL3NoYXJlZC9jb250YWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuLi9jb250YWN0cy9zaGFyZWQvY29udGFjdHMubW9kZWwnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdlZGl0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2VkaXQuY29tcG9uZW50LnhtbCcsXG5cdHN0eWxlVXJsczogWycuL2VkaXQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb250YWN0U2VydmljZTogQ29udGFjdHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuXHRwcml2YXRlIG9yaWdpbmFsQ29udGFjdDogQ29udGFjdFxuXHRwcml2YXRlIGNvbnRhY3Q6IENvbnRhY3RcblxuXHRuZ09uSW5pdCgpIHsgXG5cdFx0Y29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuXHRcdHRoaXMub3JpZ2luYWxDb250YWN0ID0gdGhpcy5jb250YWN0U2VydmljZS5nZXRDb250YWN0KGlkKTtcblx0XHR0aGlzLmNvbnRhY3QgPSB7aWQ6IHRoaXMub3JpZ2luYWxDb250YWN0LmlkLCBuYW1lOiB0aGlzLm9yaWdpbmFsQ29udGFjdC5uYW1lLCBlbWFpbDogdGhpcy5vcmlnaW5hbENvbnRhY3QuZW1haWwsIHRlbXBsYXRlOiB0aGlzLm9yaWdpbmFsQ29udGFjdC50ZW1wbGF0ZX1cblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblx0XHQvL2NvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcblx0XHQvL3NpZGVEcmF3ZXIuZ2VzdHVyZXNFbmFibGVkID0gZmFsc2Vcblx0fVxuXG5cdGJhY2tQcmVzc2VkKCl7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpXG5cdH1cblxuXHRzYXZlUHJlc3NlZCgpe1xuXHRcdHRoaXMuY29udGFjdFNlcnZpY2Uuc2V0Q29udGFjdCh0aGlzLmNvbnRhY3QpO1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcblx0fVxufSJdfQ==