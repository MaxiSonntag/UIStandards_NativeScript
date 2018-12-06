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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVubGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JlZW5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRTtBQUUvRSxzREFBcUQ7QUFTckQ7SUFTQyw2QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFOcEIsY0FBUyxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQTtRQUk5RCxVQUFLLEdBQWtCLEtBQUssRUFBRSxDQUFBO0lBRzlCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0MsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBQztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtTQUNwQjtJQUNGLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNkLElBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtTQUM3QjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBeEJRO1FBQVIsWUFBSyxFQUFFOzt5REFBOEI7SUFDNUI7UUFBVCxhQUFNLEVBQUU7a0NBQVksbUJBQVk7MERBQTZCO0lBQ3JEO1FBQVIsWUFBSyxFQUFFOztvRUFBNkI7SUFKekIsbUJBQW1CO1FBUC9CLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUN6QyxDQUFDO3lDQVd5QixXQUFJO09BVGxCLG1CQUFtQixDQTJCL0I7SUFBRCwwQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnc2NyZWVubGlzdCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9zY3JlZW5saXN0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc2NyZWVubGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTY3JlZW5MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKSBjYWxsYmFjayA6ICgobjogbnVtYmVyKT0+YW55KVxuXHRAT3V0cHV0KCkgb25DbGlja2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXHRASW5wdXQoKSBzaG91bGRTaG93U2VsZWN0aW9uOiBib29sZWFuXG5cdHNlbGVjdGVkSWR4IDogbnVtYmVyXG5cblx0aXRlbXM6IEFycmF5PHN0cmluZz4gPSBBcnJheSgpXG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7IFxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI1OyBpbmRleCsrKSB7XG5cdFx0XHR0aGlzLml0ZW1zLnB1c2goXCJMaXN0IGVudHJ5IFwiK2luZGV4KTtcblx0XHR9XG5cdFx0aWYodGhpcy5zaG91bGRTaG93U2VsZWN0aW9uKXtcblx0XHRcdHRoaXMuc2VsZWN0ZWRJZHggPSAwXG5cdFx0fVxuXHR9XG5cblx0aXRlbVRhcHBlZChhcmdzKXtcblx0XHRpZih0aGlzLnNob3VsZFNob3dTZWxlY3Rpb24pe1xuXHRcdFx0dGhpcy5zZWxlY3RlZElkeCA9IGFyZ3MuaW5kZXhcblx0XHR9XG5cdFx0dGhpcy5vbkNsaWNrZWQuZW1pdChhcmdzLmluZGV4KVxuXHR9XG59Il19