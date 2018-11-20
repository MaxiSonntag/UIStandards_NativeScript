"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("../contacts/shared/contacts.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var imagepicker = require("nativescript-imagepicker");
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
    DetailsComponent.prototype.imageTapped = function () {
        console.log("Starting Image Selection");
        var that = this;
        var context = imagepicker.create({
            mode: "single"
        });
        context
            .authorize()
            .then(function () {
            that.image = [];
            return context.present();
        })
            .then(function (selection) {
            console.log("Selection done: " + JSON.stringify(selection));
            //that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;
            // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
            /*selection.forEach(function (element) {
                element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
            });*/
            //console.log("Selection[0]: "+selection[0])
            that.image = selection[0];
        }).catch(function (e) {
            console.log(e);
        });
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
            templateUrl: './details.component.xml',
            styleUrls: ['./details.component.css']
        }),
        __metadata("design:paramtypes", [contacts_service_1.ContactsService, router_1.ActivatedRoute, router_2.RouterExtensions])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSx3RUFBc0U7QUFDdEUsMENBQWlEO0FBRWpELHNEQUEwRTtBQUUxRSxrREFBb0Q7QUFDcEQsc0RBQXdEO0FBVXhEO0lBTUMsMEJBQW9CLGNBQStCLEVBQVUsS0FBcUIsRUFBVSxnQkFBa0M7UUFBMUcsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUVsSSxtQ0FBUSxHQUFSO1FBQ0MsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBNEIsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsMENBQWUsR0FBZjtRQUNDLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUE7SUFDbkMsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDQyxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO0lBQ2xDLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxRQUFRO1NBQ3ZCLENBQUMsQ0FBQztRQUNILE9BQU87YUFDQSxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLFNBQVM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsa0ZBQWtGO1lBRWxGLHlGQUF5RjtZQUN6Rjs7O2lCQUdLO1lBQ2QsNENBQTRDO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQ0MsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQyxDQUFDO0lBekRXLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdEMsQ0FBQzt5Q0FRbUMsa0NBQWUsRUFBaUIsdUJBQWMsRUFBNEIseUJBQWdCO09BTmxILGdCQUFnQixDQTJENUI7SUFBRCx1QkFBQztDQUFBLEFBM0RELElBMkRDO0FBM0RZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRhY3RzU2VydmljZSB9IGZyb20gJy4uL2NvbnRhY3RzL3NoYXJlZC9jb250YWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuLi9jb250YWN0cy9zaGFyZWQvY29udGFjdHMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdkZXRhaWxzJyxcblx0dGVtcGxhdGVVcmw6ICcuL2RldGFpbHMuY29tcG9uZW50LnhtbCcsXG5cdHN0eWxlVXJsczogWycuL2RldGFpbHMuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGNvbnRhY3Q6IENvbnRhY3Rcblx0cHJpdmF0ZSBpbWFnZTogYW55XG5cdFxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdFNlcnZpY2U6IENvbnRhY3RzU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge31cblxuXHRuZ09uSW5pdCgpIHsgXG5cdFx0Y29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdXG5cdFx0dGhpcy5jb250YWN0ID0gdGhpcy5jb250YWN0U2VydmljZS5nZXRDb250YWN0KGlkKVxuXHRcdHRoaXMuaW1hZ2UgPSBcIn4vc2FtcGxlX2ltYWdlcy9hdmF0YXIucG5nXCJcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblx0XHRjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0c2lkZURyYXdlci5nZXN0dXJlc0VuYWJsZWQgPSBmYWxzZVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKXtcblx0XHRjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0c2lkZURyYXdlci5nZXN0dXJlc0VuYWJsZWQgPSB0cnVlXG5cdH1cblxuXHRpbWFnZVRhcHBlZCgpe1xuXHRcdGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgSW1hZ2UgU2VsZWN0aW9uXCIpXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xuXG5cdFx0bGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxuXHRcdH0pO1xuXHRcdGNvbnRleHRcbiAgICAgICAgLmF1dGhvcml6ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQuaW1hZ2UgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTZWxlY3Rpb24gZG9uZTogXCIgKyBKU09OLnN0cmluZ2lmeShzZWxlY3Rpb24pKTtcbiAgICAgICAgICAgIC8vdGhhdC5pbWFnZVNyYyA9IHRoYXQuaXNTaW5nbGVNb2RlICYmIHNlbGVjdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0aW9uWzBdIDogbnVsbDtcblxuICAgICAgICAgICAgLy8gc2V0IHRoZSBpbWFnZXMgdG8gYmUgbG9hZGVkIGZyb20gdGhlIGFzc2V0cyB3aXRoIG9wdGltYWwgc2l6ZXMgKG9wdGltaXplIG1lbW9yeSB1c2FnZSlcbiAgICAgICAgICAgIC8qc2VsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMud2lkdGggPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMuaGVpZ2h0ID0gdGhhdC5pc1NpbmdsZU1vZGUgPyB0aGF0LnByZXZpZXdTaXplIDogdGhhdC50aHVtYlNpemU7XG4gICAgICAgICAgICB9KTsqL1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIlNlbGVjdGlvblswXTogXCIrc2VsZWN0aW9uWzBdKVxuICAgICAgICAgICAgdGhhdC5pbWFnZSA9IHNlbGVjdGlvblswXTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcblx0fVxuXG5cdG9uQmFja1ByZXNzZWQoKXtcblx0XHRjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0c2lkZURyYXdlci5nZXN0dXJlc0VuYWJsZWQgPSB0cnVlXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpXG5cdH1cblxufSJdfQ==