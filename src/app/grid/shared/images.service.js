"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var images_model_1 = require("./images.model");
var ImagesService = /** @class */ (function () {
    function ImagesService() {
        this.images = new Array();
        for (var index = 0; index < 26; index++) {
            var element = new images_model_1.Images();
            element.path = "~/sample_images/DSC_" + index + ".jpg";
            this.images.push(element);
        }
    }
    ImagesService.prototype.getContacts = function () {
        return this.images;
    };
    ImagesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ImagesService);
    return ImagesService;
}());
exports.ImagesService = ImagesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywrQ0FBd0M7QUFHeEM7SUFJQztRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQU0sT0FBTyxHQUFHLElBQUkscUJBQU0sRUFBRSxDQUFBO1lBQzVCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLEdBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0YsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBZlEsYUFBYTtRQUR6QixpQkFBVSxFQUFFOztPQUNBLGFBQWEsQ0FpQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSAnLi9pbWFnZXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW1hZ2VzU2VydmljZSB7XG5cblx0cHJpdmF0ZSBpbWFnZXM6IEFycmF5PEltYWdlcz5cblxuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMuaW1hZ2VzID0gbmV3IEFycmF5PEltYWdlcz4oKTtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjY7IGluZGV4KyspIHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBuZXcgSW1hZ2VzKClcblx0XHRcdGVsZW1lbnQucGF0aCA9IFwifi9zYW1wbGVfaW1hZ2VzL0RTQ19cIitpbmRleCtcIi5qcGdcIjtcblx0XHRcdHRoaXMuaW1hZ2VzLnB1c2goZWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29udGFjdHMoKTogSW1hZ2VzW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXM7XG4gICAgfVxuXG59Il19