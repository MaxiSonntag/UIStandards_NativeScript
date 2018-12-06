"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var web_view_1 = require("tns-core-modules/ui/web-view");
var WebComponent = /** @class */ (function () {
    function WebComponent(page) {
        this.page = page;
        this.isLoading = true;
        this.webViewVisibility = "collapse";
    }
    WebComponent.prototype.ngOnInit = function () {
    };
    WebComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var webView = this.webViewRef.nativeElement;
        webView.on(web_view_1.WebView.loadFinishedEvent, function (data) {
            console.dir("LOADING FINISHED");
            webView.visibility = "visible";
            var indicator = _this.indicatorRef.nativeElement;
            indicator.busy = false;
            indicator.visibility = "collapse";
        });
    };
    WebComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = this.page.parent.parent;
        sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("webView"),
        __metadata("design:type", core_1.ElementRef)
    ], WebComponent.prototype, "webViewRef", void 0);
    __decorate([
        core_1.ViewChild("loadingIndicator"),
        __metadata("design:type", core_1.ElementRef)
    ], WebComponent.prototype, "indicatorRef", void 0);
    WebComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'WebComponent',
            templateUrl: './web.component.html',
            styleUrls: ['./web.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], WebComponent);
    return WebComponent;
}());
exports.WebComponent = WebComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFDeEYsc0RBQXFEO0FBRXJELHlEQUFxRTtBQVVyRTtJQU9DLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUg5QixjQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLHNCQUFpQixHQUFHLFVBQVUsQ0FBQTtJQUVJLENBQUM7SUFFbkMsK0JBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQUEsaUJBVUM7UUFUQSxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQTtRQUNwRCxPQUFPLENBQUMsRUFBRSxDQUFDLGtCQUFPLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxJQUFtQjtZQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFDL0IsT0FBTyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7WUFDOUIsSUFBSSxTQUFTLEdBQXNCLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFBO1lBQ2xFLFNBQVMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO1lBQ3RCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO1FBRWxDLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELHdDQUFpQixHQUFqQjtRQUNPLElBQU0sVUFBVSxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUExQnFCO1FBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDO2tDQUFhLGlCQUFVO29EQUFBO0lBQ2I7UUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQztrQ0FBZSxpQkFBVTtzREFBQTtJQUgzQyxZQUFZO1FBUHhCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNsQyxDQUFDO3lDQVN5QixXQUFJO09BUGxCLFlBQVksQ0E4QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXcnXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yJ1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdXZWJDb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vd2ViLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vd2ViLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFdlYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZChcIndlYlZpZXdcIikgd2ViVmlld1JlZjogRWxlbWVudFJlZlxuXHRAVmlld0NoaWxkKFwibG9hZGluZ0luZGljYXRvclwiKSBpbmRpY2F0b3JSZWY6IEVsZW1lbnRSZWZcblx0aXNMb2FkaW5nID0gdHJ1ZVxuXHR3ZWJWaWV3VmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIlxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdFxuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCl7XG5cdFx0bGV0IHdlYlZpZXc6IFdlYlZpZXcgPSB0aGlzLndlYlZpZXdSZWYubmF0aXZlRWxlbWVudFxuXHRcdHdlYlZpZXcub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgKGRhdGE6IExvYWRFdmVudERhdGEpPT57XG5cdFx0XHRjb25zb2xlLmRpcihcIkxPQURJTkcgRklOSVNIRURcIilcblx0XHRcdHdlYlZpZXcudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXG5cdFx0XHRsZXQgaW5kaWNhdG9yOiBBY3Rpdml0eUluZGljYXRvciA9IHRoaXMuaW5kaWNhdG9yUmVmLm5hdGl2ZUVsZW1lbnRcblx0XHRcdGluZGljYXRvci5idXN5ID0gZmFsc2Vcblx0XHRcdGluZGljYXRvci52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiXG5cdFx0XHRcblx0XHR9KVxuXHR9XG5cblx0b25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj50aGlzLnBhZ2UucGFyZW50LnBhcmVudDtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG5cdH1cblx0XG59Il19