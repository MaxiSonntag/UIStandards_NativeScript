"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var timer_1 = require("tns-core-modules/timer");
var ThemesComponent = /** @class */ (function () {
    function ThemesComponent(page) {
        this.page = page;
        this.value = 0;
        this.items = [
            { title: "List item 1 title", sub: "List item 1 subtitle", img: "~/sample_images/DSC_0.jpg" },
            { title: "List item 2 title", sub: "List item 2 subtitle", img: "~/sample_images/DSC_1.jpg" },
            { title: "List item 3 title", sub: "List item 3 subtitle", img: "~/sample_images/DSC_2.jpg" },
            { title: "List item 4 title", sub: "List item 4 subtitle", img: "~/sample_images/DSC_3.jpg" },
            { title: "List item 5 title", sub: "List item 5 subtitle", img: "~/sample_images/DSC_4.jpg" }
        ];
    }
    ThemesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = timer_1.setInterval(function () {
            if (_this.value < 100) {
                _this.value += 1;
            }
            else {
                _this.value = 0;
            }
        }, 200);
    };
    ThemesComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = this.page.parent.parent;
        sideDrawer.showDrawer();
    };
    ThemesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'themes',
            templateUrl: './themes.component.html',
            styleUrls: ['./themes.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ThemesComponent);
    return ThemesComponent;
}());
exports.ThemesComponent = ThemesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoZW1lcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXFEO0FBRXJELGdEQUFxRDtBQVNyRDtJQVlDLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVR2QixVQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ1QsVUFBSyxHQUFHO1lBQ2QsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLHNCQUFzQixFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBQztZQUMzRixFQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxHQUFHLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLDJCQUEyQixFQUFDO1lBQzNGLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLEdBQUcsRUFBRSxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUM7WUFDM0YsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLHNCQUFzQixFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBQztZQUMzRixFQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxHQUFHLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLDJCQUEyQixFQUFDO1NBQzNGLENBQUE7SUFFaUMsQ0FBQztJQUVuQyxrQ0FBUSxHQUFSO1FBQUEsaUJBU0U7UUFSRCxJQUFJLENBQUMsRUFBRSxHQUFHLG1CQUFXLENBQUM7WUFDckIsSUFBRyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBQztnQkFDbkIsS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUE7YUFDZjtpQkFDRztnQkFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTthQUNkO1FBQ0YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1AsQ0FBQztJQUVGLDJDQUFpQixHQUFqQjtRQUNPLElBQU0sVUFBVSxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUE1QlEsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQzt5Q0FjeUIsV0FBSTtPQVpsQixlQUFlLENBNkIzQjtJQUFELHNCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBzZXRJbnRlcnZhbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RpbWVyXCI7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3RoZW1lcycsXG5cdHRlbXBsYXRlVXJsOiAnLi90aGVtZXMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi90aGVtZXMuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVGhlbWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwdWJsaWMgaWRcblx0cHVibGljIHZhbHVlID0gMFxuXHRwdWJsaWMgaXRlbXMgPSBbXG5cdFx0e3RpdGxlOiBcIkxpc3QgaXRlbSAxIHRpdGxlXCIsIHN1YjogXCJMaXN0IGl0ZW0gMSBzdWJ0aXRsZVwiLCBpbWc6IFwifi9zYW1wbGVfaW1hZ2VzL0RTQ18wLmpwZ1wifSxcblx0XHR7dGl0bGU6IFwiTGlzdCBpdGVtIDIgdGl0bGVcIiwgc3ViOiBcIkxpc3QgaXRlbSAyIHN1YnRpdGxlXCIsIGltZzogXCJ+L3NhbXBsZV9pbWFnZXMvRFNDXzEuanBnXCJ9LFxuXHRcdHt0aXRsZTogXCJMaXN0IGl0ZW0gMyB0aXRsZVwiLCBzdWI6IFwiTGlzdCBpdGVtIDMgc3VidGl0bGVcIiwgaW1nOiBcIn4vc2FtcGxlX2ltYWdlcy9EU0NfMi5qcGdcIn0sXG5cdFx0e3RpdGxlOiBcIkxpc3QgaXRlbSA0IHRpdGxlXCIsIHN1YjogXCJMaXN0IGl0ZW0gNCBzdWJ0aXRsZVwiLCBpbWc6IFwifi9zYW1wbGVfaW1hZ2VzL0RTQ18zLmpwZ1wifSxcblx0XHR7dGl0bGU6IFwiTGlzdCBpdGVtIDUgdGl0bGVcIiwgc3ViOiBcIkxpc3QgaXRlbSA1IHN1YnRpdGxlXCIsIGltZzogXCJ+L3NhbXBsZV9pbWFnZXMvRFNDXzQuanBnXCJ9XG5cdF1cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKT0+e1xuXHRcdFx0aWYodGhpcy52YWx1ZSA8IDEwMCl7XG5cdFx0XHRcdHRoaXMudmFsdWUgKz0gMVxuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IDBcblx0XHRcdH1cblx0XHR9LCAyMDApXG5cdCB9XG5cblx0b25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj50aGlzLnBhZ2UucGFyZW50LnBhcmVudDtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufSJdfQ==