"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var imagepicker = require("nativescript-imagepicker");
var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(page) {
        this.page = page;
    }
    ImagesComponent.prototype.ngOnInit = function () {
        this.image = "~/sample_images/click_me.png";
    };
    ImagesComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = this.page.parent.parent;
        sideDrawer.showDrawer();
    };
    ImagesComponent.prototype.imageTapped = function () {
        var _this = this;
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
        }, function (reason) {
            console.dir("Authorization failed for reason: " + reason);
            _this._showPermissionDialog(reason);
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
            if (selection != undefined) {
                that.image = selection[0];
            }
        }).catch(function (e) {
            console.log(e);
        });
    };
    ImagesComponent.prototype._showPermissionDialog = function (error) {
        var options = {
            title: "Permission denied",
            message: "You need to grant permission to access images.",
            okButtonText: "Okay"
        };
        alert(options);
    };
    ImagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'images',
            templateUrl: './images.component.html',
            styleUrls: ['./images.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ImagesComponent);
    return ImagesComponent;
}());
exports.ImagesComponent = ImagesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXFEO0FBRXJELHNEQUF3RDtBQVN4RDtJQUlDLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsOEJBQThCLENBQUE7SUFDM0MsQ0FBQztJQUVGLDJDQUFpQixHQUFqQjtRQUNPLElBQU0sVUFBVSxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQUEsaUJBbUNDO1FBbENBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUN2QixJQUFJLEVBQUUsUUFBUTtTQUN2QixDQUFDLENBQUM7UUFDSCxPQUFPO2FBQ0EsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsQ0FBQyxFQUNELFVBQUMsTUFBTTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUMsTUFBTSxDQUFDLENBQUE7WUFDdkQsS0FBSSxDQUFDLHFCQUFxQixDQUFDLE1BQWUsQ0FBQyxDQUFBO1FBQzVDLENBQUMsQ0FDQTthQUNNLElBQUksQ0FBQyxVQUFDLFNBQVM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsa0ZBQWtGO1lBRWxGLHlGQUF5RjtZQUN6Rjs7O2lCQUdLO1lBQ2QsNENBQTRDO1lBQzVDLElBQUcsU0FBUyxJQUFJLFNBQVMsRUFBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUI7UUFFSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsK0NBQXFCLEdBQXJCLFVBQXNCLEtBQVk7UUFDakMsSUFBSSxPQUFPLEdBQUM7WUFDWCxLQUFLLEVBQUUsbUJBQW1CO1lBQzFCLE9BQU8sRUFBRSxnREFBZ0Q7WUFDekQsWUFBWSxFQUFFLE1BQU07U0FDcEIsQ0FBQTtRQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNmLENBQUM7SUEzRFcsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQzt5Q0FNeUIsV0FBSTtPQUpsQixlQUFlLENBNEQzQjtJQUFELHNCQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2ltYWdlcycsXG5cdHRlbXBsYXRlVXJsOiAnLi9pbWFnZXMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9pbWFnZXMuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwdWJsaWMgaW1hZ2UgOiBhbnlcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaW1hZ2UgPSBcIn4vc2FtcGxlX2ltYWdlcy9jbGlja19tZS5wbmdcIlxuXHQgfVxuXG5cdG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+dGhpcy5wYWdlLnBhcmVudC5wYXJlbnQ7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuXHR9XG5cdFxuXHRpbWFnZVRhcHBlZCgpe1xuXHRcdGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgSW1hZ2UgU2VsZWN0aW9uXCIpXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xuXG5cdFx0bGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxuXHRcdH0pO1xuXHRcdGNvbnRleHRcbiAgICAgICAgLmF1dGhvcml6ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQuaW1hZ2UgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcblx0XHR9LFxuXHRcdChyZWFzb24pPT57XG5cdFx0XHRjb25zb2xlLmRpcihcIkF1dGhvcml6YXRpb24gZmFpbGVkIGZvciByZWFzb246IFwiK3JlYXNvbilcblx0XHRcdHRoaXMuX3Nob3dQZXJtaXNzaW9uRGlhbG9nKHJlYXNvbiBhcyBFcnJvcilcblx0XHR9XG5cdFx0KVxuICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlNlbGVjdGlvbiBkb25lOiBcIiArIEpTT04uc3RyaW5naWZ5KHNlbGVjdGlvbikpO1xuICAgICAgICAgICAgLy90aGF0LmltYWdlU3JjID0gdGhhdC5pc1NpbmdsZU1vZGUgJiYgc2VsZWN0aW9uLmxlbmd0aCA+IDAgPyBzZWxlY3Rpb25bMF0gOiBudWxsO1xuXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGltYWdlcyB0byBiZSBsb2FkZWQgZnJvbSB0aGUgYXNzZXRzIHdpdGggb3B0aW1hbCBzaXplcyAob3B0aW1pemUgbWVtb3J5IHVzYWdlKVxuICAgICAgICAgICAgLypzZWxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy53aWR0aCA9IHRoYXQuaXNTaW5nbGVNb2RlID8gdGhhdC5wcmV2aWV3U2l6ZSA6IHRoYXQudGh1bWJTaXplO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9ucy5oZWlnaHQgPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcbiAgICAgICAgICAgIH0pOyovXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiU2VsZWN0aW9uWzBdOiBcIitzZWxlY3Rpb25bMF0pXG5cdFx0XHRpZihzZWxlY3Rpb24gIT0gdW5kZWZpbmVkKXtcblx0XHRcdFx0dGhhdC5pbWFnZSA9IHNlbGVjdGlvblswXTtcblx0XHRcdH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuXHR9XG5cblx0X3Nob3dQZXJtaXNzaW9uRGlhbG9nKGVycm9yOiBFcnJvcil7XG5cdFx0bGV0IG9wdGlvbnM9e1xuXHRcdFx0dGl0bGU6IFwiUGVybWlzc2lvbiBkZW5pZWRcIixcblx0XHRcdG1lc3NhZ2U6IFwiWW91IG5lZWQgdG8gZ3JhbnQgcGVybWlzc2lvbiB0byBhY2Nlc3MgaW1hZ2VzLlwiLFxuXHRcdFx0b2tCdXR0b25UZXh0OiBcIk9rYXlcIlxuXHRcdH1cblx0XHRhbGVydChvcHRpb25zKVxuXHR9XG59Il19