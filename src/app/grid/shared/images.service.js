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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywrQ0FBd0M7QUFHeEM7SUFJQztRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNsQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3hDLElBQU0sT0FBTyxHQUFHLElBQUkscUJBQU0sRUFBRSxDQUFBO1lBQzVCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLEdBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQjtJQUNGLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ08sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFmUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQWlCekI7SUFBRCxvQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbWFnZXMgfSBmcm9tICcuL2ltYWdlcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZXNTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGltYWdlczogQXJyYXk8SW1hZ2VzPlxuXG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5pbWFnZXMgPSBuZXcgQXJyYXk8SW1hZ2VzPigpO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNjsgaW5kZXgrKykge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IG5ldyBJbWFnZXMoKVxuXHRcdFx0ZWxlbWVudC5wYXRoID0gXCJ+L3NhbXBsZV9pbWFnZXMvRFNDX1wiK2luZGV4K1wiLmpwZ1wiO1xuXHRcdFx0dGhpcy5pbWFnZXMucHVzaChlbGVtZW50KTtcblx0XHR9XG5cdH1cblxuXHRnZXRDb250YWN0cygpOiBJbWFnZXNbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlcztcbiAgICB9XG5cbn0iXX0=