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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXFEO0FBRXJELHNEQUF3RDtBQVN4RDtJQUlDLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsOEJBQThCLENBQUE7SUFDM0MsQ0FBQztJQUVGLDJDQUFpQixHQUFqQjtRQUNPLElBQU0sVUFBVSxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxRQUFRO1NBQ3ZCLENBQUMsQ0FBQztRQUNILE9BQU87YUFDQSxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxTQUFTO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25ELGtGQUFrRjtZQUVsRix5RkFBeUY7WUFDekY7OztpQkFHSztZQUNkLDRDQUE0QztZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBMUNXLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3JDLENBQUM7eUNBTXlCLFdBQUk7T0FKbEIsZUFBZSxDQTJDM0I7SUFBRCxzQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdpbWFnZXMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vaW1hZ2VzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vaW1hZ2VzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEltYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHVibGljIGltYWdlIDogYW55XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmltYWdlID0gXCJ+L3NhbXBsZV9pbWFnZXMvY2xpY2tfbWUucG5nXCJcblx0IH1cblxuXHRvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPnRoaXMucGFnZS5wYXJlbnQucGFyZW50O1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcblx0fVxuXHRcblx0aW1hZ2VUYXBwZWQoKXtcblx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIEltYWdlIFNlbGVjdGlvblwiKVxuXHRcdGxldCB0aGF0ID0gdGhpcztcblxuXHRcdGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZGU6IFwic2luZ2xlXCJcblx0XHR9KTtcblx0XHRjb250ZXh0XG4gICAgICAgIC5hdXRob3JpemUoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LmltYWdlID0gW107XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChzZWxlY3Rpb24pID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiU2VsZWN0aW9uIGRvbmU6IFwiICsgSlNPTi5zdHJpbmdpZnkoc2VsZWN0aW9uKSk7XG4gICAgICAgICAgICAvL3RoYXQuaW1hZ2VTcmMgPSB0aGF0LmlzU2luZ2xlTW9kZSAmJiBzZWxlY3Rpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGlvblswXSA6IG51bGw7XG5cbiAgICAgICAgICAgIC8vIHNldCB0aGUgaW1hZ2VzIHRvIGJlIGxvYWRlZCBmcm9tIHRoZSBhc3NldHMgd2l0aCBvcHRpbWFsIHNpemVzIChvcHRpbWl6ZSBtZW1vcnkgdXNhZ2UpXG4gICAgICAgICAgICAvKnNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zLndpZHRoID0gdGhhdC5pc1NpbmdsZU1vZGUgPyB0aGF0LnByZXZpZXdTaXplIDogdGhhdC50aHVtYlNpemU7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zLmhlaWdodCA9IHRoYXQuaXNTaW5nbGVNb2RlID8gdGhhdC5wcmV2aWV3U2l6ZSA6IHRoYXQudGh1bWJTaXplO1xuICAgICAgICAgICAgfSk7Ki9cblx0XHRcdC8vY29uc29sZS5sb2coXCJTZWxlY3Rpb25bMF06IFwiK3NlbGVjdGlvblswXSlcbiAgICAgICAgICAgIHRoYXQuaW1hZ2UgPSBzZWxlY3Rpb25bMF07XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG5cdH1cbn0iXX0=