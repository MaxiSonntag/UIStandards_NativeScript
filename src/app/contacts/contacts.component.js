"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts_service_1 = require("./shared/contacts.service");
var common_1 = require("@angular/common");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELDhEQUE0RDtBQUU1RCwwQ0FBa0Q7QUFJbEQsNEZBQTBGO0FBRTFGLHNEQUFtRTtBQUNuRSxzREFBK0Q7QUFHL0Qsa0RBQW9EO0FBQ3BELDBDQUFnRTtBQVVoRTtJQU9DLDJCQUFvQixlQUFnQyxFQUFVLFFBQTBCLEVBQVUsZ0JBQWtDLEVBQVUsS0FBcUI7UUFBL0ksb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFObkssYUFBUSxHQUE2QixJQUFJLGtDQUFlLEVBQVcsQ0FBQztRQW1FMUQsNkJBQXdCLEdBQUcsVUFBQyxJQUFhLEVBQUUsS0FBYSxFQUFFLEtBQVU7WUFDdkUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLENBQUMsQ0FBQTtRQTlEQTs7Ozs7Ozs7OztlQVVPO0lBQ1IsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFFQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQTtJQUN2RCxDQUFDO0lBRUQsNkNBQWlCLEdBQWpCO1FBQ08sSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVKLDJDQUFlLEdBQWY7UUFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkQ7O1dBRUc7UUFFSCxJQUFJLFFBQVEsR0FBNkIsSUFBSSxrQ0FBZSxFQUFXLENBQUM7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QkFBZ0IsRUFBRSxFQUFFLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMzSztJQUNGLENBQUM7SUFFRCwrQ0FBbUIsR0FBbkIsVUFBb0IsSUFBdUI7UUFDMUMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEQsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQXZJVyxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxXQUFXLEVBQUUseUJBQXlCO1NBQ3RDLENBQUM7eUNBU29DLGtDQUFlLEVBQW9CLHlCQUFnQixFQUE0Qix5QkFBZ0IsRUFBaUIsdUJBQWM7T0FQdkosaUJBQWlCLENBeUk3QjtJQUFELHdCQUFDO0NBQUEsQUF6SUQsSUF5SUM7QUF6SVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4vc2hhcmVkL2NvbnRhY3RzLm1vZGVsJztcbmltcG9ydCB7IENvbnRhY3RzU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2NvbnRhY3RzLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBQbGF0Zm9ybUxvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9jb25zb2xlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcnO1xuaW1wb3J0IHsgVmlldywgbGF5b3V0LCBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2NvbnRhY3RzJyxcblx0c3R5bGVVcmxzOiBbJ2NvbnRhY3RzLmNvbXBvbmVudC5jc3MnXSxcblx0dGVtcGxhdGVVcmw6ICdjb250YWN0cy5jb21wb25lbnQuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRjb250YWN0czogT2JzZXJ2YWJsZUFycmF5PENvbnRhY3Q+ID0gbmV3IE9ic2VydmFibGVBcnJheTxDb250YWN0PigpO1xuXHRfdGVtcGxhdGVTZWxlY3RvcjogKGl0ZW06IENvbnRhY3QsIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHN0cmluZztcblx0c3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cblxuXHRyaWdodFRocmVzaG9sZFBhc3NlZDogQm9vbGVhblxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdHNTZXJ2aWNlOiBDb250YWN0c1NlcnZpY2UsIHByaXZhdGUgbG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24sIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcblx0XHQvKnRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKCh2YWwpID0+IHtcblx0XHRcdGlmICh2YWwgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbkVuZFwiKVxuXHRcdFx0ICBpZiAodGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci51cmwgPT0gXCIvY29udGFjdHNcIikge1xuXHRcdFx0XHRjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG5cdFx0XHRcdHNpZGVEcmF3ZXIuZ2VzdHVyZXNFbmFibGVkID0gdHJ1ZVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIm5hdmlnYXRpb24gZW5kXCIpO1xuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdFx0ICB9XG5cdFx0XHR9XG5cdFx0ICB9KTsqL1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0XG5cdFx0dGhpcy5fc2V0dXBMaXN0SXRlbXMoKVxuXHRcdHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IgPSB0aGlzLnRlbXBsYXRlU2VsZWN0b3JGdW5jdGlvblxuXHR9XG5cblx0b25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG5cdF9zZXR1cExpc3RJdGVtcygpe1xuXHRcdHRoaXMuY29udGFjdHMgPSB0aGlzLmNvbnRhY3RzU2VydmljZS5nZXRDb250YWN0cygpO1xuXG5cdFx0Lypmb3IobGV0IGlkeCA9IDA7IGlkeCA8IDIwMDA7IGlkeCsrKXtcblx0XHRcdHRoaXMuY29udGFjdHMucHVzaCh7aWQ6IFwiXCIsIG5hbWU6IFwiVGVzdCBuYW1lXCIsIGVtYWlsOiBcInRlc3QgbWFpbFwiLCB0ZW1wbGF0ZTogXCJkZWZhdWx0XCJ9KTtcblx0XHR9Ki9cblxuXHRcdHZhciByZXNBcnJheTogT2JzZXJ2YWJsZUFycmF5PENvbnRhY3Q+ID0gbmV3IE9ic2VydmFibGVBcnJheTxDb250YWN0PigpO1xuXHRcdHZhciBuciA9IDA7XG5cblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250YWN0cy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGlmKGluZGV4JTQ9PTApe1xuXHRcdFx0XHRyZXNBcnJheS5wdXNoKHtpZDogXCJcIiwgbmFtZTogXCJIZWFkaW5nIFwiK25yLCBlbWFpbDogXCJcIiwgdGVtcGxhdGU6IFwic2VjdGlvblwifSk7XG5cdFx0XHRcdG5yKys7XG5cdFx0XHR9XG5cdFx0XHRyZXNBcnJheS5wdXNoKHRoaXMuY29udGFjdHMuZ2V0SXRlbShpbmRleCkpO1xuXHRcdH1cblx0XHR0aGlzLmNvbnRhY3RzID0gcmVzQXJyYXk7XG5cdH1cblxuXG5cdGl0ZW1UYXAoZXZlbnQ6IExpc3RWaWV3RXZlbnREYXRhKXtcblx0XHRpZih0aGlzLmNvbnRhY3RzLmdldEl0ZW0oZXZlbnQuaW5kZXgpLnRlbXBsYXRlID09IFwiZGVmYXVsdFwiKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiSVRFTSBUQVA6IFwiK2V2ZW50LmluZGV4KVxuXHRcdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5uYXZpZ2F0ZShbXCJkZXRhaWxzXCIsIHRoaXMuY29udGFjdHMuZ2V0SXRlbShldmVudC5pbmRleCkuaWRdKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgdGVtcGxhdGVTZWxlY3RvcigpOiAoaXRlbTogQ29udGFjdCwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4gc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3I7XG4gICAgfVxuXG4gICAgc2V0IHRlbXBsYXRlU2VsZWN0b3IodmFsdWU6IChpdGVtOiBDb250YWN0LCBpbmRleDogbnVtYmVyLCBpdGVtczogYW55KSA9PiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNlbGVjdG9yRnVuY3Rpb24gPSAoaXRlbTogQ29udGFjdCwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS50ZW1wbGF0ZTtcblx0fVxuXHRcblx0Ly9cInRhcCB0byBleGVjdXRlXCJcblx0LypvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcblx0XHRjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcblx0XHRjb25zdCBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcblx0XHRjb25zdCBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignbWFyay12aWV3Jyk7XG5cdFx0Y29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdkZWxldGUtdmlldycpO1xuXHRcdHN3aXBlTGltaXRzLmxlZnQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG5cdFx0c3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuXHRcdHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG5cdH0qL1xuXG5cdC8vIHN3aXBlIHRvIGV4ZWN1dGUgXG5cdG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuXHRcdGNvbnNvbGUubG9nKFwiU1dJUEUgQ0VMTCBTVEFSVEVEXCIpO1xuXHRcdGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuXHRcdGNvbnN0IHN3aXBlVmlldyA9IGFyZ3NbJ29iamVjdCddO1xuXHRcdGlmKHRoaXMuY29udGFjdHMuZ2V0SXRlbShhcmdzLmluZGV4KS50ZW1wbGF0ZSA9PT0gXCJzZWN0aW9uXCIpe1xuXHRcdFx0Y29uc29sZS5sb2coXCJTV0lQRSBJVEVNIElTIFNFQ1RJT05cIik7XG5cdFx0XHRzd2lwZUxpbWl0cy5sZWZ0ID0gc3dpcGVMaW1pdHMucmlnaHQgPSAwO1xuXHRcdFx0c3dpcGVMaW1pdHMudGhyZXNob2xkID0gc3dpcGVWaWV3LmdldE1lYXN1cmVkV2lkdGgoKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGNvbnNvbGUubG9nKFwiU1dJUEUgSVRFTSBJUyBERUZBVUxUXCIpO1xuXHRcdFx0Y29uc3QgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ21hcmstdmlldycpO1xuXHRcdFx0Y29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdkZWxldGUtdmlldycpO1xuXHRcdFx0c3dpcGVMaW1pdHMucmlnaHQgPSBhcmdzLmRhdGEueCA+IDAgPyBzd2lwZVZpZXcuZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMiA6IHN3aXBlVmlldy5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xuXHRcdFx0c3dpcGVMaW1pdHMubGVmdCA9IDA7XG5cdFx0XHRzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBzd2lwZVZpZXcuZ2V0TWVhc3VyZWRXaWR0aCgpO1xuXHRcdH1cblx0XHRcblx0fVxuXG5cdG9uQ2VsbFN3aXBpbmcoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcblx0XHRjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcblx0XHRjb25zdCBzd2lwZVZpZXcgPSBhcmdzWydzd2lwZVZpZXcnXTtcblx0XHRjb25zdCBtYWluVmlldyA9IGFyZ3NbJ21haW5WaWV3J107XG5cdFx0Y29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdkZWxldGUtdmlldycpO1xuXHRcblx0XHRpZiAoYXJncy5kYXRhLnggPD0gLXN3aXBlVmlldy5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyICYmICF0aGlzLnJpZ2h0VGhyZXNob2xkUGFzc2VkKSB7XG5cdFx0XHRjb25zdCBkZWxldGVMYWJlbCA9IHJpZ2h0SXRlbS5nZXRWaWV3QnlJZCgnZGVsZXRlLXRleHQnKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiTm90aWZ5IHBlcmZvcm0gcmlnaHQgYWN0aW9uXCIpO1xuXHRcdFx0dGhpcy5yaWdodFRocmVzaG9sZFBhc3NlZCA9IHRydWU7XG5cdFx0fVxuXHRcdGlmIChhcmdzLmRhdGEueCA8PSAwKSB7XG5cdFx0XHRjb25zdCByaWdodERpbWVuc2lvbnMgPSBWaWV3Lm1lYXN1cmVDaGlsZChcblx0XHRcdFx0cmlnaHRJdGVtLnBhcmVudCxcblx0XHRcdFx0cmlnaHRJdGVtLFxuXHRcdFx0XHRsYXlvdXQubWFrZU1lYXN1cmVTcGVjKE1hdGguYWJzKGFyZ3MuZGF0YS54KSwgbGF5b3V0LkVYQUNUTFkpLFxuXHRcdFx0XHRsYXlvdXQubWFrZU1lYXN1cmVTcGVjKG1haW5WaWV3LmdldE1lYXN1cmVkSGVpZ2h0KCksIGxheW91dC5FWEFDVExZKSk7XG5cdFxuXHRcdFx0Vmlldy5sYXlvdXRDaGlsZChyaWdodEl0ZW0ucGFyZW50LCByaWdodEl0ZW0sIG1haW5WaWV3LmdldE1lYXN1cmVkV2lkdGgoKSAtIHJpZ2h0RGltZW5zaW9ucy5tZWFzdXJlZFdpZHRoLCAwLCBtYWluVmlldy5nZXRNZWFzdXJlZFdpZHRoKCksIHJpZ2h0RGltZW5zaW9ucy5tZWFzdXJlZEhlaWdodCk7XG5cdFx0fVxuXHR9XG5cblx0b25Td2lwZUNlbGxGaW5pc2hlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuXHRcdGNvbnN0IHN3aXBlVmlldyA9IGFyZ3NbJ29iamVjdCddO1xuXHRcdGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdtYXJrLXZpZXcnKTtcblx0XHRjb25zdCByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ2RlbGV0ZS12aWV3Jyk7XG5cdFx0aWYgKHRoaXMucmlnaHRUaHJlc2hvbGRQYXNzZWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGVyZm9ybSByaWdodCBhY3Rpb25cIik7XG5cdFx0XHR0aGlzLmNvbnRhY3RzLnNwbGljZShhcmdzLmluZGV4LCAxKTtcblx0XHR9XG5cdFx0dGhpcy5yaWdodFRocmVzaG9sZFBhc3NlZCA9IGZhbHNlO1xuXHR9XG5cbn0iXX0=