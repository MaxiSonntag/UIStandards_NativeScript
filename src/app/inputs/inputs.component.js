"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_system_1 = require("tns-core-modules/file-system/file-system");
var page_1 = require("tns-core-modules/ui/page/page");
var InputsComponent = /** @class */ (function () {
    function InputsComponent(page) {
        this.page = page;
        this.resultText = "Not validated yet";
    }
    InputsComponent.prototype.ngOnInit = function () {
        this._inputTest = new InputTest();
        this._readSettingsFromJson();
    };
    Object.defineProperty(InputsComponent.prototype, "inputTest", {
        get: function () {
            return this._inputTest;
        },
        enumerable: true,
        configurable: true
    });
    InputsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = this.page.parent.parent;
        sideDrawer.showDrawer();
    };
    InputsComponent.prototype._readSettingsFromJson = function () {
        return __awaiter(this, void 0, void 0, function () {
            var appFolder, dataFolder, jsonFile, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appFolder = file_system_1.knownFolders.currentApp();
                        dataFolder = appFolder.getFolder("sample_data");
                        jsonFile = dataFolder.getFile("dataform_settings.json");
                        return [4 /*yield*/, jsonFile.readText()];
                    case 1:
                        json = _a.sent();
                        this.metadata = JSON.parse(json);
                        return [2 /*return*/];
                }
            });
        });
    };
    InputsComponent.prototype._setResultText = function (type) {
        var label = this.page.getViewById("resultText");
        switch (type) {
            case TextStyles.Success:
                this.resultText = "Everything alright!";
                label.color = new page_1.Color("#008000");
                break;
            case TextStyles.Failure:
                this.resultText = "Validation failed.";
                label.color = new page_1.Color("#ff0000");
                break;
            default:
                this.resultText = "Not validated yet";
                label.color = new page_1.Color("#000000");
                break;
        }
    };
    InputsComponent.prototype.validateForm = function () {
        var _this = this;
        var form = this.page.getViewById("dataForm");
        form.validateAll().then(function (result) {
            result ? _this._setResultText(TextStyles.Success) : _this._setResultText(TextStyles.Failure);
        });
    };
    InputsComponent.prototype.resetForm = function () {
        this._inputTest = new InputTest();
        var form = this.page.getViewById("dataForm");
        form.reload();
        this._setResultText(TextStyles.Neutral);
    };
    InputsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'inputs',
            templateUrl: './inputs.component.html',
            styleUrls: ['./inputs.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], InputsComponent);
    return InputsComponent;
}());
exports.InputsComponent = InputsComponent;
var InputTest = /** @class */ (function () {
    function InputTest(text, email, phone, date, time) {
        if (text === void 0) { text = ""; }
        if (email === void 0) { email = ""; }
        if (phone === void 0) { phone = null; }
        if (date === void 0) { date = null; }
        if (time === void 0) { time = null; }
        this.text = text;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.time = time;
    }
    return InputTest;
}());
exports.InputTest = InputTest;
var TextStyles;
(function (TextStyles) {
    TextStyles[TextStyles["Neutral"] = 0] = "Neutral";
    TextStyles[TextStyles["Success"] = 1] = "Success";
    TextStyles[TextStyles["Failure"] = 2] = "Failure";
})(TextStyles = exports.TextStyles || (exports.TextStyles = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlucHV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsd0VBQXdFO0FBQ3hFLHNEQUE0RDtBQVc1RDtJQU1DLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUY5QixlQUFVLEdBQVcsbUJBQW1CLENBQUE7SUFFTixDQUFDO0lBRW5DLGtDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFJLHNDQUFTO2FBQWI7WUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCwyQ0FBaUIsR0FBakI7UUFDTyxJQUFNLFVBQVUsR0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBR0UsK0NBQXFCLEdBQTNCOzs7Ozs7d0JBQ08sU0FBUyxHQUFHLDBCQUFZLENBQUMsVUFBVSxFQUFFLENBQUE7d0JBQ3JDLFVBQVUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFBO3dCQUMvQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO3dCQUNoRCxxQkFBTSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUFoQyxJQUFJLEdBQUcsU0FBeUI7d0JBRXRDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs7S0FDaEM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsSUFBZ0I7UUFDOUIsSUFBTSxLQUFLLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDeEQsUUFBUSxJQUFJLEVBQUU7WUFDYixLQUFLLFVBQVUsQ0FBQyxPQUFPO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFDLHFCQUFxQixDQUFBO2dCQUNyQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksWUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUNsQyxNQUFNO1lBQ1AsS0FBSyxVQUFVLENBQUMsT0FBTztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBb0IsQ0FBQTtnQkFDcEMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDbEMsTUFBSztZQUNOO2dCQUNDLElBQUksQ0FBQyxVQUFVLEdBQUMsbUJBQW1CLENBQUE7Z0JBQ25DLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxZQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ2xDLE1BQU07U0FDUDtJQUVGLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQUEsaUJBS0M7UUFKQSxJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDOUIsTUFBTSxDQUFBLENBQUMsQ0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLENBQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkYsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBRWIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQWhFVyxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUNyQyxDQUFDO3lDQVF5QixXQUFJO09BTmxCLGVBQWUsQ0FrRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSwwQ0FBZTtBQW9FNUI7SUFPQyxtQkFBWSxJQUFpQixFQUFFLEtBQWtCLEVBQUUsS0FBb0IsRUFBRSxJQUFpQixFQUFFLElBQWlCO1FBQWpHLHFCQUFBLEVBQUEsU0FBaUI7UUFBRSxzQkFBQSxFQUFBLFVBQWtCO1FBQUUsc0JBQUEsRUFBQSxZQUFvQjtRQUFFLHFCQUFBLEVBQUEsV0FBaUI7UUFBRSxxQkFBQSxFQUFBLFdBQWlCO1FBQzVHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2pCLENBQUM7SUFDRixnQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksOEJBQVM7QUFnQnRCLElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNyQixpREFBTyxDQUFBO0lBQ1AsaURBQU8sQ0FBQTtJQUNQLGlEQUFPLENBQUE7QUFDUixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSYWREYXRhRm9ybSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybSc7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtJztcbmltcG9ydCB7IFBhZ2UsIENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCJcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaW5wdXRzJyxcblx0dGVtcGxhdGVVcmw6ICcuL2lucHV0cy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2lucHV0cy5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnB1dHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cblx0cHJpdmF0ZSBfaW5wdXRUZXN0OiBJbnB1dFRlc3Rcblx0bWV0YWRhdGEgOiBhbnlcblx0cmVzdWx0VGV4dDogc3RyaW5nID0gXCJOb3QgdmFsaWRhdGVkIHlldFwiXG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgXG5cdFx0dGhpcy5faW5wdXRUZXN0ID0gbmV3IElucHV0VGVzdCgpO1xuXHRcdHRoaXMuX3JlYWRTZXR0aW5nc0Zyb21Kc29uKCk7XG5cdH1cblxuXHRnZXQgaW5wdXRUZXN0KCl7XG5cdFx0cmV0dXJuIHRoaXMuX2lucHV0VGVzdFxuXHR9XG5cblx0b25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj50aGlzLnBhZ2UucGFyZW50LnBhcmVudDtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG5cblx0YXN5bmMgX3JlYWRTZXR0aW5nc0Zyb21Kc29uKCl7XG5cdFx0Y29uc3QgYXBwRm9sZGVyID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKVxuXHRcdGNvbnN0IGRhdGFGb2xkZXIgPSBhcHBGb2xkZXIuZ2V0Rm9sZGVyKFwic2FtcGxlX2RhdGFcIilcblx0XHRjb25zdCBqc29uRmlsZSA9IGRhdGFGb2xkZXIuZ2V0RmlsZShcImRhdGFmb3JtX3NldHRpbmdzLmpzb25cIilcblx0XHRjb25zdCBqc29uID0gYXdhaXQganNvbkZpbGUucmVhZFRleHQoKVxuXHRcdFxuXHRcdHRoaXMubWV0YWRhdGEgPSBKU09OLnBhcnNlKGpzb24pXG5cdH1cblxuXHRfc2V0UmVzdWx0VGV4dCh0eXBlOiBUZXh0U3R5bGVzKXtcblx0XHRjb25zdCBsYWJlbCA9IDxMYWJlbD50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJyZXN1bHRUZXh0XCIpXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlIFRleHRTdHlsZXMuU3VjY2Vzczpcblx0XHRcdFx0dGhpcy5yZXN1bHRUZXh0PVwiRXZlcnl0aGluZyBhbHJpZ2h0IVwiXG5cdFx0XHRcdGxhYmVsLmNvbG9yID0gbmV3IENvbG9yKFwiIzAwODAwMFwiKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgVGV4dFN0eWxlcy5GYWlsdXJlOlxuXHRcdFx0XHR0aGlzLnJlc3VsdFRleHQ9XCJWYWxpZGF0aW9uIGZhaWxlZC5cIlxuXHRcdFx0XHRsYWJlbC5jb2xvciA9IG5ldyBDb2xvcihcIiNmZjAwMDBcIilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMucmVzdWx0VGV4dD1cIk5vdCB2YWxpZGF0ZWQgeWV0XCJcblx0XHRcdFx0bGFiZWwuY29sb3IgPSBuZXcgQ29sb3IoXCIjMDAwMDAwXCIpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRcblx0fVxuXG5cdHZhbGlkYXRlRm9ybSgpe1xuXHRcdGNvbnN0IGZvcm0gPSA8UmFkRGF0YUZvcm0+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiZGF0YUZvcm1cIilcblx0XHRmb3JtLnZhbGlkYXRlQWxsKCkudGhlbigocmVzdWx0KT0+e1xuXHRcdFx0cmVzdWx0P3RoaXMuX3NldFJlc3VsdFRleHQoVGV4dFN0eWxlcy5TdWNjZXNzKTp0aGlzLl9zZXRSZXN1bHRUZXh0KFRleHRTdHlsZXMuRmFpbHVyZSlcblx0XHR9KVxuXHR9XG5cblx0cmVzZXRGb3JtKCl7XG5cdFx0dGhpcy5faW5wdXRUZXN0ID0gbmV3IElucHV0VGVzdCgpO1xuXHRcdGNvbnN0IGZvcm0gPSA8UmFkRGF0YUZvcm0+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiZGF0YUZvcm1cIilcblx0XHRmb3JtLnJlbG9hZCgpXG5cdFx0XG5cdFx0dGhpcy5fc2V0UmVzdWx0VGV4dChUZXh0U3R5bGVzLk5ldXRyYWwpXG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgSW5wdXRUZXN0e1xuXHR0ZXh0OiBzdHJpbmdcblx0ZW1haWw6IHN0cmluZ1xuXHRwaG9uZTogbnVtYmVyXG5cdGRhdGU6IERhdGVcblx0dGltZTogVGltZVxuXG5cdGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZyA9IFwiXCIsIGVtYWlsOiBzdHJpbmcgPSBcIlwiLCBwaG9uZTogbnVtYmVyID0gbnVsbCwgZGF0ZTogRGF0ZSA9IG51bGwsIHRpbWU6IFRpbWUgPSBudWxsKXtcblx0XHR0aGlzLnRleHQgPSB0ZXh0XG5cdFx0dGhpcy5lbWFpbCA9IGVtYWlsXG5cdFx0dGhpcy5waG9uZSA9IHBob25lXG5cdFx0dGhpcy5kYXRlID0gZGF0ZVxuXHRcdHRoaXMudGltZSA9IHRpbWVcblx0fVxufVxuXG5leHBvcnQgZW51bSBUZXh0U3R5bGVze1xuXHROZXV0cmFsLFxuXHRTdWNjZXNzLFxuXHRGYWlsdXJlXG59Il19