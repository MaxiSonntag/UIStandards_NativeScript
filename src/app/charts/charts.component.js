"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_system_1 = require("tns-core-modules/file-system");
var user_model_1 = require("./shared/user.model");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var page_1 = require("tns-core-modules/ui/page/page");
var ChartsComponent = /** @class */ (function () {
    function ChartsComponent(page) {
        this.page = page;
        this.users = new observable_array_1.ObservableArray();
        this.usersPerYear = new observable_array_1.ObservableArray();
        this.selectedYear = "";
        this.selectedNumber = "";
        this.moreInformationVisible = "hidden";
    }
    ChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loadJsonFromFile().then(function () { return _this._createChartSourceArray(); });
    };
    ChartsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = this.page.parent.parent;
        sideDrawer.showDrawer();
    };
    ChartsComponent.prototype._loadJsonFromFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var appFolder, dataFolder, jsonFile, json, jsonObj, tempArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appFolder = file_system_1.knownFolders.currentApp();
                        dataFolder = appFolder.getFolder("sample_data");
                        jsonFile = dataFolder.getFile("sample_json.json");
                        return [4 /*yield*/, jsonFile.readText()];
                    case 1:
                        json = _a.sent();
                        jsonObj = JSON.parse(json);
                        //console.log("JSON: "+jsonObj)
                        console.log("Users Array will be nearly ready");
                        tempArray = new Array();
                        jsonObj.forEach(function (obj) { tempArray.push(new user_model_1.User(obj["name"], obj["age"], new Date(Date.parse(obj["registered"].replace(" ", ""))))); });
                        console.log("Users Array nearly ready");
                        tempArray.sort(function (user1, user2) { return user1.registered.getTime() - user2.registered.getTime(); });
                        this.users = new observable_array_1.ObservableArray(tempArray);
                        console.log("Users Array ready");
                        return [2 /*return*/];
                }
            });
        });
    };
    ChartsComponent.prototype._createChartSourceArray = function () {
        var mapped = new Map();
        this.users.forEach(function (user) {
            var year = Math.floor(user.registered.getFullYear());
            if (mapped.has(year)) {
                mapped.get(year).push(user);
            }
            else {
                mapped.set(year, new Array(user));
            }
        });
        var temp = new Array();
        mapped.forEach(function (users, year) {
            temp.push(new UsersPerYear(year.toString(), users.length - 1));
        });
        temp.sort(function (user1, user2) { return user1.year - user2.year; });
        this.usersPerYear = new observable_array_1.ObservableArray(temp);
    };
    ChartsComponent.prototype.pointSelected = function (event) {
        this.moreInformationVisible = "visible";
        var selected = this.usersPerYear.getItem(event.pointIndex);
        this.selectedYear = selected.year;
        this.selectedNumber = selected.number.toString();
    };
    ChartsComponent.prototype.pointDeselected = function (event) {
        this._deselectedForIndex = event.pointIndex;
        if (this.usersPerYear.getItem(this._deselectedForIndex).year == this.selectedYear) {
            this.moreInformationVisible = "hidden";
        }
    };
    ChartsComponent.prototype.trackballRequested = function (event) {
        var selected = this.usersPerYear.getItem(event.pointIndex);
        event.content = selected.number + " users";
    };
    ChartsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'charts',
            templateUrl: './charts.component.html',
            styleUrls: ['./charts.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ChartsComponent);
    return ChartsComponent;
}());
exports.ChartsComponent = ChartsComponent;
var UsersPerYear = /** @class */ (function () {
    function UsersPerYear(year, number) {
        this.year = year;
        this.number = number;
    }
    return UsersPerYear;
}());
exports.UsersPerYear = UsersPerYear;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUY7QUFDbkYsNERBQTBFO0FBRTFFLGtEQUEwQztBQUMxQyw0RkFBMEY7QUFLMUYsc0RBQXFEO0FBVXJEO0lBU0MseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBUDlCLFVBQUssR0FBMEIsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDckQsaUJBQVksR0FBa0MsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDcEUsaUJBQVksR0FBVyxFQUFFLENBQUE7UUFDekIsbUJBQWMsR0FBVyxFQUFFLENBQUE7UUFDM0IsMkJBQXNCLEdBQUcsUUFBUSxDQUFBO0lBR0MsQ0FBQztJQUVuQyxrQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFEQSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBSSxPQUFBLEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUE5QixDQUE4QixDQUFDLENBQUE7SUFDbEUsQ0FBQztJQUVELDJDQUFpQixHQUFqQjtRQUNPLElBQU0sVUFBVSxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFHRSwyQ0FBaUIsR0FBdkI7Ozs7Ozt3QkFDTyxTQUFTLEdBQUcsMEJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQTt3QkFDckMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUE7d0JBQy9DLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7d0JBQzFDLHFCQUFNLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQWhDLElBQUksR0FBRyxTQUF5Qjt3QkFFaEMsT0FBTyxH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QUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLEtBQWlDO1FBQ2hELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFBO1FBQzNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUNqRixJQUFJLENBQUMsc0JBQXNCLEdBQUcsUUFBUSxDQUFBO1FBQ3ZDLENBQUM7SUFFRixDQUFDO0lBRUQsNENBQWtCLEdBQWxCLFVBQW1CLEtBQWlDO1FBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMxRCxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFBO0lBQ3pDLENBQUM7SUE3RVcsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQzt5Q0FXeUIsV0FBSTtPQVRsQixlQUFlLENBOEUzQjtJQUFELHNCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksMENBQWU7QUFnRjVCO0lBQ0Msc0JBQW1CLElBQVksRUFBUyxNQUFjO1FBQW5DLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUMxRCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzLCBGb2xkZXIsIEZpbGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICdyeGpzL2ludGVybmFsL3NjaGVkdWxlci9hc3luYyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIubW9kZWxcIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGFydEV2ZW50RGF0YSwgVHJhY2tiYWxsQ3VzdG9tQ29udGVudERhdGEsIERhdGVUaW1lQ2F0ZWdvcmljYWxBeGlzIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWNoYXJ0JztcbmltcG9ydCB7IERhdGVUaW1lQ29udGludW91c0F4aXNEaXJlY3RpdmUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhci9jaGFydC1kaXJlY3RpdmVzJztcbmltcG9ydCB7IG1vbnRoUHJvcGVydHkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdjaGFydHMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vY2hhcnRzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vY2hhcnRzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENoYXJ0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0dXNlcnM6IE9ic2VydmFibGVBcnJheTxVc2VyPiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcblx0dXNlcnNQZXJZZWFyOiBPYnNlcnZhYmxlQXJyYXk8VXNlcnNQZXJZZWFyPiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcblx0c2VsZWN0ZWRZZWFyOiBTdHJpbmcgPSBcIlwiXG5cdHNlbGVjdGVkTnVtYmVyOiBTdHJpbmcgPSBcIlwiXG5cdG1vcmVJbmZvcm1hdGlvblZpc2libGUgPSBcImhpZGRlblwiXG5cdF9kZXNlbGVjdGVkRm9ySW5kZXg6IG51bWJlclxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdHRoaXMuX2xvYWRKc29uRnJvbUZpbGUoKS50aGVuKCgpPT50aGlzLl9jcmVhdGVDaGFydFNvdXJjZUFycmF5KCkpXG5cdH1cblxuXHRvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPnRoaXMucGFnZS5wYXJlbnQucGFyZW50O1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cblxuXHRhc3luYyBfbG9hZEpzb25Gcm9tRmlsZSgpe1xuXHRcdGNvbnN0IGFwcEZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKClcblx0XHRjb25zdCBkYXRhRm9sZGVyID0gYXBwRm9sZGVyLmdldEZvbGRlcihcInNhbXBsZV9kYXRhXCIpXG5cdFx0Y29uc3QganNvbkZpbGUgPSBkYXRhRm9sZGVyLmdldEZpbGUoXCJzYW1wbGVfanNvbi5qc29uXCIpXG5cdFx0Y29uc3QganNvbiA9IGF3YWl0IGpzb25GaWxlLnJlYWRUZXh0KClcblx0XHRcblx0XHRjb25zdCBqc29uT2JqID0gSlNPTi5wYXJzZShqc29uKSBhcyBBcnJheTxNYXA8U3RyaW5nLCBhbnk+PlxuXHRcdC8vY29uc29sZS5sb2coXCJKU09OOiBcIitqc29uT2JqKVxuXHRcdGNvbnNvbGUubG9nKFwiVXNlcnMgQXJyYXkgd2lsbCBiZSBuZWFybHkgcmVhZHlcIilcblx0XHR2YXIgdGVtcEFycmF5OiBBcnJheTxVc2VyPiA9IG5ldyBBcnJheSgpXG5cdFx0anNvbk9iai5mb3JFYWNoKChvYmopPT57dGVtcEFycmF5LnB1c2gobmV3IFVzZXIob2JqW1wibmFtZVwiXSwgb2JqW1wiYWdlXCJdLCBuZXcgRGF0ZShEYXRlLnBhcnNlKChvYmpbXCJyZWdpc3RlcmVkXCJdIGFzIFN0cmluZykucmVwbGFjZShcIiBcIixcIlwiKSkpKSl9KVxuXHRcdGNvbnNvbGUubG9nKFwiVXNlcnMgQXJyYXkgbmVhcmx5IHJlYWR5XCIpXG5cdFx0XG5cdFx0dGVtcEFycmF5LnNvcnQoKHVzZXIxLCB1c2VyMik9PnVzZXIxLnJlZ2lzdGVyZWQuZ2V0VGltZSgpLXVzZXIyLnJlZ2lzdGVyZWQuZ2V0VGltZSgpKVxuXHRcdHRoaXMudXNlcnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRlbXBBcnJheSlcblx0XHRjb25zb2xlLmxvZyhcIlVzZXJzIEFycmF5IHJlYWR5XCIpXG5cdH1cblxuXHRfY3JlYXRlQ2hhcnRTb3VyY2VBcnJheSgpe1xuXHRcdHZhciBtYXBwZWQgOiBNYXA8bnVtYmVyLCBBcnJheTxVc2VyPj4gPSBuZXcgTWFwKCk7XG5cdFx0dGhpcy51c2Vycy5mb3JFYWNoKCh1c2VyKT0+e1xuXHRcdFx0dmFyIHllYXIgPSBNYXRoLmZsb29yKHVzZXIucmVnaXN0ZXJlZC5nZXRGdWxsWWVhcigpKTtcblx0XHRcdGlmKG1hcHBlZC5oYXMoeWVhcikpe1xuXHRcdFx0XHRtYXBwZWQuZ2V0KHllYXIpLnB1c2godXNlcilcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdG1hcHBlZC5zZXQoeWVhciwgbmV3IEFycmF5PFVzZXI+KHVzZXIpKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dmFyIHRlbXAgPSBuZXcgQXJyYXkoKVxuXHRcdG1hcHBlZC5mb3JFYWNoKCh1c2VycywgeWVhcik9Pntcblx0XHRcdHRlbXAucHVzaChuZXcgVXNlcnNQZXJZZWFyKHllYXIudG9TdHJpbmcoKSwgdXNlcnMubGVuZ3RoLTEpKVxuXHRcdH0pXG5cdFx0dGVtcC5zb3J0KCh1c2VyMSwgdXNlcjIpPT4odXNlcjEueWVhciBhcyBudW1iZXIpIC0gKHVzZXIyLnllYXIgYXMgbnVtYmVyKSlcblx0XHR0aGlzLnVzZXJzUGVyWWVhciA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGVtcClcblx0fVxuXG5cdHBvaW50U2VsZWN0ZWQoZXZlbnQ6IENoYXJ0RXZlbnREYXRhKXtcblx0XHR0aGlzLm1vcmVJbmZvcm1hdGlvblZpc2libGUgPSBcInZpc2libGVcIlxuXHRcdHZhciBzZWxlY3RlZCA9IHRoaXMudXNlcnNQZXJZZWFyLmdldEl0ZW0oZXZlbnQucG9pbnRJbmRleClcblx0XHR0aGlzLnNlbGVjdGVkWWVhciA9IHNlbGVjdGVkLnllYXJcblx0XHR0aGlzLnNlbGVjdGVkTnVtYmVyID0gc2VsZWN0ZWQubnVtYmVyLnRvU3RyaW5nKClcblx0XHRcblx0fVxuXG5cdHBvaW50RGVzZWxlY3RlZChldmVudDogVHJhY2tiYWxsQ3VzdG9tQ29udGVudERhdGEpe1xuXHRcdHRoaXMuX2Rlc2VsZWN0ZWRGb3JJbmRleCA9IGV2ZW50LnBvaW50SW5kZXhcblx0XHRpZih0aGlzLnVzZXJzUGVyWWVhci5nZXRJdGVtKHRoaXMuX2Rlc2VsZWN0ZWRGb3JJbmRleCkueWVhciA9PSB0aGlzLnNlbGVjdGVkWWVhcil7XG5cdFx0XHR0aGlzLm1vcmVJbmZvcm1hdGlvblZpc2libGUgPSBcImhpZGRlblwiXG5cdFx0fVxuXHRcdFxuXHR9XG5cblx0dHJhY2tiYWxsUmVxdWVzdGVkKGV2ZW50OiBUcmFja2JhbGxDdXN0b21Db250ZW50RGF0YSl7XG5cdFx0dmFyIHNlbGVjdGVkID0gdGhpcy51c2Vyc1BlclllYXIuZ2V0SXRlbShldmVudC5wb2ludEluZGV4KVxuXHRcdGV2ZW50LmNvbnRlbnQgPSBzZWxlY3RlZC5udW1iZXIrXCIgdXNlcnNcIlxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBVc2Vyc1BlclllYXJ7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB5ZWFyOiBTdHJpbmcsIHB1YmxpYyBudW1iZXI6IG51bWJlcil7fVxufSJdfQ==