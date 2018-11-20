"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_system_1 = require("tns-core-modules/file-system/file-system");
var page_1 = require("tns-core-modules/ui/page/page");
var InputsComponent = /** @class */ (function () {
    function InputsComponent(page) {
        this.page = page;
    }
    InputsComponent.prototype.ngOnInit = function () {
        this._inputTest = new InputTest();
        this._readSettingsFromJson();
        this._setResultText(TextStyles.Neutral);
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
                label.text = "Everything alright!";
                label.color = new page_1.Color("#008000");
                break;
            case TextStyles.Failure:
                label.text = "Validation failed.";
                label.color = new page_1.Color("#ff0000");
                break;
            default:
                label.text = "Not validated yet";
                label.color = new page_1.Color("#000000");
                break;
        }
    };
    InputsComponent.prototype.validateForm = function () {
        var _this = this;
        var form = this.page.getViewById("dataForm");
        form.validateAndCommitAll().then(function (result) { result ? _this._setResultText(TextStyles.Success) : _this._setResultText(TextStyles.Failure); });
    };
    InputsComponent.prototype.resetForm = function () {
        this._inputTest = new InputTest();
        var form = this.page.getViewById("dataForm");
        form.commitAll();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlucHV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUU7QUFHakUsd0VBQXdFO0FBQ3hFLHNEQUE0RDtBQWE1RDtJQU1DLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsc0JBQUksc0NBQVM7YUFBYjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsMkNBQWlCLEdBQWpCO1FBQ08sSUFBTSxVQUFVLEdBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMxRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUdFLCtDQUFxQixHQUEzQjs7Ozs7O3dCQUNPLFNBQVMsR0FBRywwQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFBO3dCQUNyQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQTt3QkFDL0MsUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQTt3QkFDaEQscUJBQU0sUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBaEMsSUFBSSxHQUFHLFNBQXlCO3dCQUV0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7O0tBQ2hDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLElBQWdCO1FB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YUZvcm1FdmVudERhdGEsIFJhZERhdGFGb3JtIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtJztcbmltcG9ydCB7IGtub3duRm9sZGVycyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW0nO1xuaW1wb3J0IHsgUGFnZSwgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHtpc0lPUywgaXNBbmRyb2lkfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCJcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaW5wdXRzJyxcblx0dGVtcGxhdGVVcmw6ICcuL2lucHV0cy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2lucHV0cy5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnB1dHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cblx0cHJpdmF0ZSBfaW5wdXRUZXN0OiBJbnB1dFRlc3Rcblx0bWV0YWRhdGEgOiBhbnlcblx0cmVzdWx0VGV4dDogc3RyaW5nXG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgXG5cdFx0dGhpcy5faW5wdXRUZXN0ID0gbmV3IElucHV0VGVzdCgpO1xuXHRcdHRoaXMuX3JlYWRTZXR0aW5nc0Zyb21Kc29uKCk7XG5cdFx0dGhpcy5fc2V0UmVzdWx0VGV4dChUZXh0U3R5bGVzLk5ldXRyYWwpXG5cdH1cblxuXHRnZXQgaW5wdXRUZXN0KCl7XG5cdFx0cmV0dXJuIHRoaXMuX2lucHV0VGVzdFxuXHR9XG5cblx0b25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj50aGlzLnBhZ2UucGFyZW50LnBhcmVudDtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG5cblx0YXN5bmMgX3JlYWRTZXR0aW5nc0Zyb21Kc29uKCl7XG5cdFx0Y29uc3QgYXBwRm9sZGVyID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKVxuXHRcdGNvbnN0IGRhdGFGb2xkZXIgPSBhcHBGb2xkZXIuZ2V0Rm9sZGVyKFwic2FtcGxlX2RhdGFcIilcblx0XHRjb25zdCBqc29uRmlsZSA9IGRhdGFGb2xkZXIuZ2V0RmlsZShcImRhdGFmb3JtX3NldHRpbmdzLmpzb25cIilcblx0XHRjb25zdCBqc29uID0gYXdhaXQganNvbkZpbGUucmVhZFRleHQoKVxuXHRcdFxuXHRcdHRoaXMubWV0YWRhdGEgPSBKU09OLnBhcnNlKGpzb24pXG5cdH1cblxuXHRfc2V0UmVzdWx0VGV4dCh0eXBlOiBUZXh0U3R5bGVzKXtcblx0XHRjb25zdCBsYWJlbCA9IDxMYWJlbD50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJyZXN1bHRUZXh0XCIpXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlIFRleHRTdHlsZXMuU3VjY2Vzczpcblx0XHRcdFx0bGFiZWwudGV4dD1cIkV2ZXJ5dGhpbmcgYWxyaWdodCFcIlxuXHRcdFx0XHRsYWJlbC5jb2xvciA9IG5ldyBDb2xvcihcIiMwMDgwMDBcIilcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRleHRTdHlsZXMuRmFpbHVyZTpcblx0XHRcdFx0bGFiZWwudGV4dD1cIlZhbGlkYXRpb24gZmFpbGVkLlwiXG5cdFx0XHRcdGxhYmVsLmNvbG9yID0gbmV3IENvbG9yKFwiI2ZmMDAwMFwiKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0bGFiZWwudGV4dD1cIk5vdCB2YWxpZGF0ZWQgeWV0XCJcblx0XHRcdFx0bGFiZWwuY29sb3IgPSBuZXcgQ29sb3IoXCIjMDAwMDAwXCIpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRcblx0fVxuXG5cdHZhbGlkYXRlRm9ybSgpe1xuXHRcdGNvbnN0IGZvcm0gPSA8UmFkRGF0YUZvcm0+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiZGF0YUZvcm1cIilcblx0XHRmb3JtLnZhbGlkYXRlQW5kQ29tbWl0QWxsKCkudGhlbigocmVzdWx0KT0+e3Jlc3VsdD90aGlzLl9zZXRSZXN1bHRUZXh0KFRleHRTdHlsZXMuU3VjY2Vzcyk6dGhpcy5fc2V0UmVzdWx0VGV4dChUZXh0U3R5bGVzLkZhaWx1cmUpfSlcblx0fVxuXG5cdHJlc2V0Rm9ybSgpe1xuXHRcdHRoaXMuX2lucHV0VGVzdCA9IG5ldyBJbnB1dFRlc3QoKTtcblx0XHRjb25zdCBmb3JtID0gPFJhZERhdGFGb3JtPnRoaXMucGFnZS5nZXRWaWV3QnlJZChcImRhdGFGb3JtXCIpXG5cdFx0Zm9ybS5jb21taXRBbGwoKVxuXHRcdHRoaXMuX3NldFJlc3VsdFRleHQoVGV4dFN0eWxlcy5OZXV0cmFsKVxuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIElucHV0VGVzdHtcblx0dGV4dDogc3RyaW5nXG5cdGVtYWlsOiBzdHJpbmdcblx0cGhvbmU6IG51bWJlclxuXHRkYXRlOiBEYXRlXG5cdHRpbWU6IFRpbWVcblxuXHRjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcgPSBcIlwiLCBlbWFpbDogc3RyaW5nID0gXCJcIiwgcGhvbmU6IG51bWJlciA9IG51bGwsIGRhdGU6IERhdGUgPSBudWxsLCB0aW1lOiBUaW1lID0gbnVsbCl7XG5cdFx0dGhpcy50ZXh0ID0gdGV4dFxuXHRcdHRoaXMuZW1haWwgPSBlbWFpbFxuXHRcdHRoaXMucGhvbmUgPSBwaG9uZVxuXHRcdHRoaXMuZGF0ZSA9IGRhdGVcblx0XHR0aGlzLnRpbWUgPSB0aW1lXG5cdH1cbn1cblxuZXhwb3J0IGVudW0gVGV4dFN0eWxlc3tcblx0TmV1dHJhbCxcblx0U3VjY2Vzcyxcblx0RmFpbHVyZVxufSJdfQ==