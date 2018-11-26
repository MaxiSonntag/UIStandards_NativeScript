"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var ScreenListComponent = /** @class */ (function () {
    function ScreenListComponent(page) {
        this.page = page;
        this.onClicked = new core_1.EventEmitter();
        this.items = Array();
    }
    ScreenListComponent.prototype.ngOnInit = function () {
        for (var index = 0; index < 25; index++) {
            this.items.push("List entry " + index);
        }
        if (this.shouldShowSelection) {
            this.selectedIdx = 0;
        }
    };
    ScreenListComponent.prototype.itemTapped = function (args) {
        if (this.shouldShowSelection) {
            this.selectedIdx = args.index;
        }
        this.onClicked.emit(args.index);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ScreenListComponent.prototype, "callback", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ScreenListComponent.prototype, "onClicked", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ScreenListComponent.prototype, "shouldShowSelection", void 0);
    ScreenListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'screenlist',
            templateUrl: './screenlist.component.html',
            styleUrls: ['./screenlist.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ScreenListComponent);
    return ScreenListComponent;
}());
exports.ScreenListComponent = ScreenListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVubGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JlZW5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRTtBQUUvRSxzREFBcUQ7QUFTckQ7SUFTQyw2QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFOcEIsY0FBUyxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQTtRQUk5RCxVQUFLLEdBQWtCLEtBQUssRUFBRSxDQUFBO0lBRzlCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0MsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUE7UUFDckIsQ0FBQztJQUNGLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNkLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQzlCLENBQUM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQXhCUTtRQUFSLFlBQUssRUFBRTs7eURBQThCO0lBQzVCO1FBQVQsYUFBTSxFQUFFO2tDQUFZLG1CQUFZOzBEQUE2QjtJQUNyRDtRQUFSLFlBQUssRUFBRTs7b0VBQTZCO0lBSnpCLG1CQUFtQjtRQVAvQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDekMsQ0FBQzt5Q0FXeUIsV0FBSTtPQVRsQixtQkFBbUIsQ0EyQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3NjcmVlbmxpc3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2NyZWVubGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3NjcmVlbmxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2NyZWVuTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KCkgY2FsbGJhY2sgOiAoKG46IG51bWJlcik9PmFueSlcblx0QE91dHB1dCgpIG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblx0QElucHV0KCkgc2hvdWxkU2hvd1NlbGVjdGlvbjogYm9vbGVhblxuXHRzZWxlY3RlZElkeCA6IG51bWJlclxuXG5cdGl0ZW1zOiBBcnJheTxzdHJpbmc+ID0gQXJyYXkoKVxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyBcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNTsgaW5kZXgrKykge1xuXHRcdFx0dGhpcy5pdGVtcy5wdXNoKFwiTGlzdCBlbnRyeSBcIitpbmRleCk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc2hvdWxkU2hvd1NlbGVjdGlvbil7XG5cdFx0XHR0aGlzLnNlbGVjdGVkSWR4ID0gMFxuXHRcdH1cblx0fVxuXG5cdGl0ZW1UYXBwZWQoYXJncyl7XG5cdFx0aWYodGhpcy5zaG91bGRTaG93U2VsZWN0aW9uKXtcblx0XHRcdHRoaXMuc2VsZWN0ZWRJZHggPSBhcmdzLmluZGV4XG5cdFx0fVxuXHRcdHRoaXMub25DbGlja2VkLmVtaXQoYXJncy5pbmRleClcblx0fVxufSJdfQ==