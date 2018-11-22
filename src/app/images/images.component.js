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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXFEO0FBRXJELHNEQUF3RDtBQVN4RDtJQUlDLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsOEJBQThCLENBQUE7SUFDM0MsQ0FBQztJQUVGLDJDQUFpQixHQUFqQjtRQUNPLElBQU0sVUFBVSxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxRQUFRO1NBQ3ZCLENBQUMsQ0FBQztRQUNILE9BQU87YUFDQSxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLFNBQVM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsa0ZBQWtGO1lBRWxGLHlGQUF5RjtZQUN6Rjs7O2lCQUdLO1lBQ2QsNENBQTRDO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUExQ1csZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQzt5Q0FNeUIsV0FBSTtPQUpsQixlQUFlLENBMkMzQjtJQUFELHNCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2ltYWdlcycsXG5cdHRlbXBsYXRlVXJsOiAnLi9pbWFnZXMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9pbWFnZXMuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwdWJsaWMgaW1hZ2UgOiBhbnlcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaW1hZ2UgPSBcIn4vc2FtcGxlX2ltYWdlcy9jbGlja19tZS5wbmdcIlxuXHQgfVxuXG5cdG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+dGhpcy5wYWdlLnBhcmVudC5wYXJlbnQ7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuXHR9XG5cdFxuXHRpbWFnZVRhcHBlZCgpe1xuXHRcdGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgSW1hZ2UgU2VsZWN0aW9uXCIpXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xuXG5cdFx0bGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxuXHRcdH0pO1xuXHRcdGNvbnRleHRcbiAgICAgICAgLmF1dGhvcml6ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQuaW1hZ2UgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTZWxlY3Rpb24gZG9uZTogXCIgKyBKU09OLnN0cmluZ2lmeShzZWxlY3Rpb24pKTtcbiAgICAgICAgICAgIC8vdGhhdC5pbWFnZVNyYyA9IHRoYXQuaXNTaW5nbGVNb2RlICYmIHNlbGVjdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0aW9uWzBdIDogbnVsbDtcblxuICAgICAgICAgICAgLy8gc2V0IHRoZSBpbWFnZXMgdG8gYmUgbG9hZGVkIGZyb20gdGhlIGFzc2V0cyB3aXRoIG9wdGltYWwgc2l6ZXMgKG9wdGltaXplIG1lbW9yeSB1c2FnZSlcbiAgICAgICAgICAgIC8qc2VsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMud2lkdGggPSB0aGF0LmlzU2luZ2xlTW9kZSA/IHRoYXQucHJldmlld1NpemUgOiB0aGF0LnRodW1iU2l6ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnMuaGVpZ2h0ID0gdGhhdC5pc1NpbmdsZU1vZGUgPyB0aGF0LnByZXZpZXdTaXplIDogdGhhdC50aHVtYlNpemU7XG4gICAgICAgICAgICB9KTsqL1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIlNlbGVjdGlvblswXTogXCIrc2VsZWN0aW9uWzBdKVxuICAgICAgICAgICAgdGhhdC5pbWFnZSA9IHNlbGVjdGlvblswXTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcblx0fVxufSJdfQ==