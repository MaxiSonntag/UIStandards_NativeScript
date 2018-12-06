"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./shared/contacts.service");
var common_1 = require("@angular/common");
var nativescript_local_notifications_1 = require("nativescript-local-notifications");
var Dialogs = require("ui/dialogs");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var router_2 = require("@angular/router");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(contactsService, location, routerExtensions, route) {
        this.contactsService = contactsService;
        this.location = location;
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.contacts = new observable_array_1.ObservableArray();
        this.templateSelectorFunction = function (item, index, items) {
            return item.template;
        };
        /*this.subscription = this.routerExtensions.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                console.log("NavigationEnd")
              if (this.routerExtensions.router.url == "/contacts") {
                const sideDrawer = <RadSideDrawer>app.getRootView();
                sideDrawer.gesturesEnabled = true
                console.log("navigation end");
                this.subscription.unsubscribe();
              }
            }
          });*/
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this._setupListItems();
        this._templateSelector = this.templateSelectorFunction;
        nativescript_local_notifications_1.LocalNotifications.addOnMessageReceivedCallback(function (notificationData) {
            Dialogs.alert({
                title: "Notification received",
                message: "ID: " + notificationData.id +
                    "\nTitle: " + notificationData.title +
                    "\nBody: " + notificationData.body,
                okButtonText: "Excellent!"
            });
        });
    };
    ContactsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ContactsComponent.prototype._setupListItems = function () {
        this.contacts = this.contactsService.getContacts();
        /*for(let idx = 0; idx < 2000; idx++){
            this.contacts.push({id: "", name: "Test name", email: "test mail", template: "default"});
        }*/
        var resArray = new observable_array_1.ObservableArray();
        var nr = 0;
        for (var index = 0; index < this.contacts.length; index++) {
            if (index % 4 == 0) {
                resArray.push({ id: "", name: "Heading " + nr, email: "", template: "section" });
                nr++;
            }
            resArray.push(this.contacts.getItem(index));
        }
        this.contacts = resArray;
    };
    ContactsComponent.prototype.itemTap = function (event) {
        if (this.contacts.getItem(event.index).template == "default") {
            console.log("ITEM TAP: " + event.index);
            this.routerExtensions.router.navigate(["details", this.contacts.getItem(event.index).id]);
        }
    };
    Object.defineProperty(ContactsComponent.prototype, "templateSelector", {
        get: function () {
            return this._templateSelector;
        },
        set: function (value) {
            this._templateSelector = value;
        },
        enumerable: true,
        configurable: true
    });
    //"tap to execute"
    /*onSwipeCellStarted(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        const swipeView = args['object'];
        const leftItem = swipeView.getViewById<View>('mark-view');
        const rightItem = swipeView.getViewById<View>('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    }*/
    // swipe to execute 
    ContactsComponent.prototype.onSwipeCellStarted = function (args) {
        console.log("SWIPE CELL STARTED");
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        if (this.contacts.getItem(args.index).template === "section") {
            console.log("SWIPE ITEM IS SECTION");
            swipeLimits.left = swipeLimits.right = 0;
            swipeLimits.threshold = swipeView.getMeasuredWidth();
        }
        else {
            console.log("SWIPE ITEM IS DEFAULT");
            var leftItem = swipeView.getViewById('mark-view');
            var rightItem = swipeView.getViewById('delete-view');
            swipeLimits.right = args.data.x > 0 ? swipeView.getMeasuredWidth() / 2 : swipeView.getMeasuredWidth() / 2;
            swipeLimits.left = 0;
            swipeLimits.threshold = swipeView.getMeasuredWidth();
        }
    };
    ContactsComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['swipeView'];
        var mainView = args['mainView'];
        var rightItem = swipeView.getViewById('delete-view');
        if (args.data.x <= -swipeView.getMeasuredWidth() / 2 && !this.rightThresholdPassed) {
            var deleteLabel = rightItem.getViewById('delete-text');
            console.log("Notify perform right action");
            this.rightThresholdPassed = true;
        }
        if (args.data.x <= 0) {
            var rightDimensions = page_1.View.measureChild(rightItem.parent, rightItem, page_1.layout.makeMeasureSpec(Math.abs(args.data.x), page_1.layout.EXACTLY), page_1.layout.makeMeasureSpec(mainView.getMeasuredHeight(), page_1.layout.EXACTLY));
            page_1.View.layoutChild(rightItem.parent, rightItem, mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0, mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
        }
    };
    ContactsComponent.prototype.onSwipeCellFinished = function (args) {
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        if (this.rightThresholdPassed) {
            console.log("Perform right action");
            this.contacts.splice(args.index, 1);
        }
        this.rightThresholdPassed = false;
    };
    ContactsComponent.prototype.schedule = function () {
        nativescript_local_notifications_1.LocalNotifications.requestPermission().then(function (granted) {
            if (granted) {
                nativescript_local_notifications_1.LocalNotifications.schedule([{
                        id: 1234,
                        title: "Test notification",
                        body: "You just received a local notification",
                        at: new Date(new Date().getTime() + (10 * 1000))
                    }]).then(function () {
                    console.log("Notification received!");
                }, function (error) {
                    console.dir(error);
                });
            }
        });
    };
    ContactsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contacts',
            styleUrls: ['contacts.component.css'],
            templateUrl: 'contacts.component.html',
        }),
        __metadata("design:paramtypes", [contacts_service_1.ContactsService, common_1.PlatformLocation, router_1.RouterExtensions, router_2.ActivatedRoute])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELDhEQUE0RDtBQUU1RCwwQ0FBa0Q7QUFFbEQscUZBQXNFO0FBQ3RFLG9DQUFxQztBQUVyQyw0RkFBMEY7QUFFMUYsc0RBQW1FO0FBQ25FLHNEQUErRDtBQUcvRCxrREFBb0Q7QUFDcEQsMENBQWdFO0FBVWhFO0lBT0MsMkJBQW9CLGVBQWdDLEVBQVUsUUFBMEIsRUFBVSxnQkFBa0MsRUFBVSxLQUFxQjtRQUEvSSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQU5uSyxhQUFRLEdBQTZCLElBQUksa0NBQWUsRUFBVyxDQUFDO1FBOEUxRCw2QkFBd0IsR0FBRyxVQUFDLElBQWEsRUFBRSxLQUFhLEVBQUUsS0FBVTtZQUN2RSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsQ0FBQyxDQUFBO1FBekVBOzs7Ozs7Ozs7O2VBVU87SUFDUixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUVDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1FBRXZELHFEQUFrQixDQUFDLDRCQUE0QixDQUFDLFVBQUEsZ0JBQWdCO1lBQy9ELE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLHVCQUF1QjtnQkFDOUIsT0FBTyxFQUFFLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUNwQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsS0FBSztvQkFDcEMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLElBQUk7Z0JBQ25DLFlBQVksRUFBRSxZ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O3dCQUMxQixJQUFJLEVBQUUsd0NBQXdDO3dCQUM5QyxFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztxQkFDbkQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDMUMsQ0FBQyxFQUFFLFVBQUEsS0FBSztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbktRLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFdBQVcsRUFBRSx5QkFBeUI7U0FDdEMsQ0FBQzt5Q0FTb0Msa0NBQWUsRUFBb0IseUJBQWdCLEVBQTRCLHlCQUFnQixFQUFpQix1QkFBYztPQVB2SixpQkFBaUIsQ0FxSzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJLRCxJQXFLQztBQXJLWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi9zaGFyZWQvY29udGFjdHMubW9kZWwnO1xuaW1wb3J0IHsgQ29udGFjdHNTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvY29udGFjdHMuc2VydmljZSc7XG5cbmltcG9ydCB7IFBsYXRmb3JtTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5cbmltcG9ydCB7IExvY2FsTm90aWZpY2F0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvY29uc29sZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcbmltcG9ydCB7IFZpZXcsIGxheW91dCwgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdjb250YWN0cycsXG5cdHN0eWxlVXJsczogWydjb250YWN0cy5jb21wb25lbnQuY3NzJ10sXG5cdHRlbXBsYXRlVXJsOiAnY29udGFjdHMuY29tcG9uZW50Lmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Y29udGFjdHM6IE9ic2VydmFibGVBcnJheTxDb250YWN0PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q29udGFjdD4oKTtcblx0X3RlbXBsYXRlU2VsZWN0b3I6IChpdGVtOiBDb250YWN0LCBpbmRleDogbnVtYmVyLCBpdGVtczogYW55KSA9PiBzdHJpbmc7XG5cdHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG5cblx0cmlnaHRUaHJlc2hvbGRQYXNzZWQ6IEJvb2xlYW5cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhY3RzU2VydmljZTogQ29udGFjdHNTZXJ2aWNlLCBwcml2YXRlIGxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG5cdFx0Lyp0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgodmFsKSA9PiB7XG5cdFx0XHRpZiAodmFsIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIk5hdmlnYXRpb25FbmRcIilcblx0XHRcdCAgaWYgKHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsID09IFwiL2NvbnRhY3RzXCIpIHtcblx0XHRcdFx0Y29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuXHRcdFx0XHRzaWRlRHJhd2VyLmdlc3R1cmVzRW5hYmxlZCA9IHRydWVcblx0XHRcdFx0Y29uc29sZS5sb2coXCJuYXZpZ2F0aW9uIGVuZFwiKTtcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHRcdCAgfVxuXHRcdFx0fVxuXHRcdCAgfSk7Ki9cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdFxuXHRcdHRoaXMuX3NldHVwTGlzdEl0ZW1zKCk7XG5cdFx0dGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRoaXMudGVtcGxhdGVTZWxlY3RvckZ1bmN0aW9uO1xuXG5cdFx0TG9jYWxOb3RpZmljYXRpb25zLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2sobm90aWZpY2F0aW9uRGF0YSA9PiB7XG5cdFx0XHREaWFsb2dzLmFsZXJ0KHtcblx0XHRcdFx0dGl0bGU6IFwiTm90aWZpY2F0aW9uIHJlY2VpdmVkXCIsXG5cdFx0XHRcdG1lc3NhZ2U6IFwiSUQ6IFwiICsgbm90aWZpY2F0aW9uRGF0YS5pZCArXG5cdFx0XHRcdFx0XCJcXG5UaXRsZTogXCIgKyBub3RpZmljYXRpb25EYXRhLnRpdGxlICtcblx0XHRcdFx0XHRcIlxcbkJvZHk6IFwiICsgbm90aWZpY2F0aW9uRGF0YS5ib2R5LFxuXHRcdFx0XHRva0J1dHRvblRleHQ6IFwiRXhjZWxsZW50IVwiXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuXHRfc2V0dXBMaXN0SXRlbXMoKXtcblx0XHR0aGlzLmNvbnRhY3RzID0gdGhpcy5jb250YWN0c1NlcnZpY2UuZ2V0Q29udGFjdHMoKTtcblxuXHRcdC8qZm9yKGxldCBpZHggPSAwOyBpZHggPCAyMDAwOyBpZHgrKyl7XG5cdFx0XHR0aGlzLmNvbnRhY3RzLnB1c2goe2lkOiBcIlwiLCBuYW1lOiBcIlRlc3QgbmFtZVwiLCBlbWFpbDogXCJ0ZXN0IG1haWxcIiwgdGVtcGxhdGU6IFwiZGVmYXVsdFwifSk7XG5cdFx0fSovXG5cblx0XHR2YXIgcmVzQXJyYXk6IE9ic2VydmFibGVBcnJheTxDb250YWN0PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q29udGFjdD4oKTtcblx0XHR2YXIgbnIgPSAwO1xuXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGFjdHMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRpZihpbmRleCU0PT0wKXtcblx0XHRcdFx0cmVzQXJyYXkucHVzaCh7aWQ6IFwiXCIsIG5hbWU6IFwiSGVhZGluZyBcIituciwgZW1haWw6IFwiXCIsIHRlbXBsYXRlOiBcInNlY3Rpb25cIn0pO1xuXHRcdFx0XHRucisrO1xuXHRcdFx0fVxuXHRcdFx0cmVzQXJyYXkucHVzaCh0aGlzLmNvbnRhY3RzLmdldEl0ZW0oaW5kZXgpKTtcblx0XHR9XG5cdFx0dGhpcy5jb250YWN0cyA9IHJlc0FycmF5O1xuXHR9XG5cblxuXHRpdGVtVGFwKGV2ZW50OiBMaXN0Vmlld0V2ZW50RGF0YSl7XG5cdFx0aWYodGhpcy5jb250YWN0cy5nZXRJdGVtKGV2ZW50LmluZGV4KS50ZW1wbGF0ZSA9PSBcImRlZmF1bHRcIil7XG5cdFx0XHRjb25zb2xlLmxvZyhcIklURU0gVEFQOiBcIitldmVudC5pbmRleClcblx0XHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIubmF2aWdhdGUoW1wiZGV0YWlsc1wiLCB0aGlzLmNvbnRhY3RzLmdldEl0ZW0oZXZlbnQuaW5kZXgpLmlkXSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHRlbXBsYXRlU2VsZWN0b3IoKTogKGl0ZW06IENvbnRhY3QsIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yO1xuICAgIH1cblxuICAgIHNldCB0ZW1wbGF0ZVNlbGVjdG9yKHZhbHVlOiAoaXRlbTogQ29udGFjdCwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4gc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGVtcGxhdGVTZWxlY3RvckZ1bmN0aW9uID0gKGl0ZW06IENvbnRhY3QsIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udGVtcGxhdGU7XG5cdH1cblx0XG5cdC8vXCJ0YXAgdG8gZXhlY3V0ZVwiXG5cdC8qb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG5cdFx0Y29uc3Qgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG5cdFx0Y29uc3Qgc3dpcGVWaWV3ID0gYXJnc1snb2JqZWN0J107XG5cdFx0Y29uc3QgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ21hcmstdmlldycpO1xuXHRcdGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignZGVsZXRlLXZpZXcnKTtcblx0XHRzd2lwZUxpbWl0cy5sZWZ0ID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuXHRcdHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcblx0XHRzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xuXHR9Ki9cblxuXHQvLyBzd2lwZSB0byBleGVjdXRlIFxuXHRvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcblx0XHRjb25zb2xlLmxvZyhcIlNXSVBFIENFTEwgU1RBUlRFRFwiKTtcblx0XHRjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcblx0XHRjb25zdCBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcblx0XHRpZih0aGlzLmNvbnRhY3RzLmdldEl0ZW0oYXJncy5pbmRleCkudGVtcGxhdGUgPT09IFwic2VjdGlvblwiKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiU1dJUEUgSVRFTSBJUyBTRUNUSU9OXCIpO1xuXHRcdFx0c3dpcGVMaW1pdHMubGVmdCA9IHN3aXBlTGltaXRzLnJpZ2h0ID0gMDtcblx0XHRcdHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IHN3aXBlVmlldy5nZXRNZWFzdXJlZFdpZHRoKCk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlNXSVBFIElURU0gSVMgREVGQVVMVFwiKTtcblx0XHRcdGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdtYXJrLXZpZXcnKTtcblx0XHRcdGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnZGVsZXRlLXZpZXcnKTtcblx0XHRcdHN3aXBlTGltaXRzLnJpZ2h0ID0gYXJncy5kYXRhLnggPiAwID8gc3dpcGVWaWV3LmdldE1lYXN1cmVkV2lkdGgoKSAvIDIgOiBzd2lwZVZpZXcuZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcblx0XHRcdHN3aXBlTGltaXRzLmxlZnQgPSAwO1xuXHRcdFx0c3dpcGVMaW1pdHMudGhyZXNob2xkID0gc3dpcGVWaWV3LmdldE1lYXN1cmVkV2lkdGgoKTtcblx0XHR9XG5cdFx0XG5cdH1cblxuXHRvbkNlbGxTd2lwaW5nKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG5cdFx0Y29uc3Qgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG5cdFx0Y29uc3Qgc3dpcGVWaWV3ID0gYXJnc1snc3dpcGVWaWV3J107XG5cdFx0Y29uc3QgbWFpblZpZXcgPSBhcmdzWydtYWluVmlldyddO1xuXHRcdGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnZGVsZXRlLXZpZXcnKTtcblx0XG5cdFx0aWYgKGFyZ3MuZGF0YS54IDw9IC1zd2lwZVZpZXcuZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMiAmJiAhdGhpcy5yaWdodFRocmVzaG9sZFBhc3NlZCkge1xuXHRcdFx0Y29uc3QgZGVsZXRlTGFiZWwgPSByaWdodEl0ZW0uZ2V0Vmlld0J5SWQoJ2RlbGV0ZS10ZXh0Jyk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIHJpZ2h0IGFjdGlvblwiKTtcblx0XHRcdHRoaXMucmlnaHRUaHJlc2hvbGRQYXNzZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRpZiAoYXJncy5kYXRhLnggPD0gMCkge1xuXHRcdFx0Y29uc3QgcmlnaHREaW1lbnNpb25zID0gVmlldy5tZWFzdXJlQ2hpbGQoXG5cdFx0XHRcdHJpZ2h0SXRlbS5wYXJlbnQsXG5cdFx0XHRcdHJpZ2h0SXRlbSxcblx0XHRcdFx0bGF5b3V0Lm1ha2VNZWFzdXJlU3BlYyhNYXRoLmFicyhhcmdzLmRhdGEueCksIGxheW91dC5FWEFDVExZKSxcblx0XHRcdFx0bGF5b3V0Lm1ha2VNZWFzdXJlU3BlYyhtYWluVmlldy5nZXRNZWFzdXJlZEhlaWdodCgpLCBsYXlvdXQuRVhBQ1RMWSkpO1xuXHRcblx0XHRcdFZpZXcubGF5b3V0Q2hpbGQocmlnaHRJdGVtLnBhcmVudCwgcmlnaHRJdGVtLCBtYWluVmlldy5nZXRNZWFzdXJlZFdpZHRoKCkgLSByaWdodERpbWVuc2lvbnMubWVhc3VyZWRXaWR0aCwgMCwgbWFpblZpZXcuZ2V0TWVhc3VyZWRXaWR0aCgpLCByaWdodERpbWVuc2lvbnMubWVhc3VyZWRIZWlnaHQpO1xuXHRcdH1cblx0fVxuXG5cdG9uU3dpcGVDZWxsRmluaXNoZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcblx0XHRjb25zdCBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcblx0XHRjb25zdCBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnbWFyay12aWV3Jyk7XG5cdFx0Y29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdkZWxldGUtdmlldycpO1xuXHRcdGlmICh0aGlzLnJpZ2h0VGhyZXNob2xkUGFzc2VkKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBlcmZvcm0gcmlnaHQgYWN0aW9uXCIpO1xuXHRcdFx0dGhpcy5jb250YWN0cy5zcGxpY2UoYXJncy5pbmRleCwgMSk7XG5cdFx0fVxuXHRcdHRoaXMucmlnaHRUaHJlc2hvbGRQYXNzZWQgPSBmYWxzZTtcblx0fVxuXG5cdHNjaGVkdWxlKCkge1xuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKGdyYW50ZWQgPT4ge1xuICAgICAgICAgICAgaWYoZ3JhbnRlZCkge1xuICAgICAgICAgICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xuICAgICAgICAgICAgICAgICAgICBpZDogMTIzNCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVGVzdCBub3RpZmljYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJZb3UganVzdCByZWNlaXZlZCBhIGxvY2FsIG5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoMTAgKiAxMDAwKSlcbiAgICAgICAgICAgICAgICB9XSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHJlY2VpdmVkIVwiKTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19