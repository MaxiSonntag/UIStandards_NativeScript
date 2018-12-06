"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var CustomCalendarComponent = /** @class */ (function () {
    function CustomCalendarComponent(page) {
        this.page = page;
        this.dayInMillis = 86400000;
        this.dates = new observable_array_1.ObservableArray();
        this.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this._selectedIndex = 0;
        this.templateSelectorFunction = function (item, index, items) {
            return item.template;
        };
    }
    CustomCalendarComponent.prototype.ngOnInit = function () {
        //Crash on iOS when templateSelector is set
        this._templateSelector = this.templateSelectorFunction;
        var startDate = new Date().getTime();
        startDate -= (25 * this.dayInMillis);
        for (var index = 0; index < 50; index++) {
            startDate += this.dayInMillis;
            var template = "normal";
            if (index == 0) {
                template = "selected";
            }
            this.dates.push(new CalendarListItem(new Date(startDate), template));
        }
        //Initial scroll
    };
    Object.defineProperty(CustomCalendarComponent.prototype, "templateSelector", {
        get: function () {
            return this._templateSelector;
        },
        set: function (value) {
            this._templateSelector = value;
        },
        enumerable: true,
        configurable: true
    });
    CustomCalendarComponent.prototype.itemTap = function (data) {
        if (this._selectedIndex != data.index) {
            var newSelection = this.dates.getItem(data.index);
            var oldSelection = this.dates.getItem(this._selectedIndex);
            oldSelection.template = "normal";
            newSelection.template = "selected";
            this.dates.setItem(data.index, newSelection);
            this.dates.setItem(this._selectedIndex, oldSelection);
            this._selectedIndex = data.index;
        }
    };
    CustomCalendarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'CustomCalendar',
            templateUrl: './custom_calendar.component.html',
            styleUrls: ['./custom_calendar.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], CustomCalendarComponent);
    return CustomCalendarComponent;
}());
exports.CustomCalendarComponent = CustomCalendarComponent;
var CalendarListItem = /** @class */ (function () {
    function CalendarListItem(date, template) {
        this._date = date;
        this._template = template;
    }
    Object.defineProperty(CalendarListItem.prototype, "template", {
        get: function () {
            return this._template;
        },
        set: function (template) {
            this._template = template;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarListItem.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (date) {
            this._date = date;
        },
        enumerable: true,
        configurable: true
    });
    return CalendarListItem;
}());
exports.CalendarListItem = CalendarListItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tX2NhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbV9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsc0RBQXFEO0FBR3JELDRGQUEwRjtBQVMxRjtJQVFDLGlDQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU45QixnQkFBVyxHQUFHLFFBQVEsQ0FBQTtRQUN0QixVQUFLLEdBQXVDLElBQUksa0NBQWUsRUFBRSxDQUFBO1FBQ2pFLGFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBRXpGLG1CQUFjLEdBQUcsQ0FBQyxDQUFBO1FBK0JSLDZCQUF3QixHQUFHLFVBQUMsSUFBc0IsRUFBRSxLQUFhLEVBQUUsS0FBVTtZQUNoRixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsQ0FBQyxDQUFBO0lBL0JpQyxDQUFDO0lBRW5DLDBDQUFRLEdBQVI7UUFDQywyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztRQUV2RCxJQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3BDLFNBQVMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDbEMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN4QyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQTtZQUM3QixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUE7WUFDdkIsSUFBRyxLQUFLLElBQUksQ0FBQyxFQUFDO2dCQUNiLFFBQVEsR0FBQyxVQUFVLENBQUE7YUFDbkI7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUE7U0FDcEU7UUFFRCxnQkFBZ0I7SUFFakIsQ0FBQztJQUVELHNCQUFJLHFEQUFnQjthQUFwQjtZQUNPLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUFxQixLQUFvRTtZQUNyRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBVUoseUNBQU8sR0FBUCxVQUFRLElBQXVCO1FBQzlCLElBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ3BDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDNUQsWUFBWSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7WUFDaEMsWUFBWSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUE7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQTtZQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFBO1lBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtTQUNoQztJQUNGLENBQUM7SUFuRFcsdUJBQXVCO1FBUG5DLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQzlDLENBQUM7eUNBVXlCLFdBQUk7T0FSbEIsdUJBQXVCLENBb0RuQztJQUFELDhCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksMERBQXVCO0FBc0RwQztJQUlDLDBCQUFZLElBQVUsRUFBRSxRQUFnQjtRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtJQUMxQixDQUFDO0lBRUQsc0JBQVcsc0NBQVE7YUFBbkI7WUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDdEIsQ0FBQzthQUNELFVBQW9CLFFBQWdCO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1FBQzFCLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksa0NBQUk7YUFBUjtZQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNsQixDQUFDO2FBQ0QsVUFBUyxJQUFVO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2xCLENBQUM7OztPQUhBO0lBSUYsdUJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXcsIExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcbmltcG9ydCB7IEFjdGlvbkJhciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdDdXN0b21DYWxlbmRhcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9jdXN0b21fY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9jdXN0b21fY2FsZW5kYXIuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGRheUluTWlsbGlzID0gODY0MDAwMDBcblx0ZGF0ZXMgOiBPYnNlcnZhYmxlQXJyYXk8Q2FsZW5kYXJMaXN0SXRlbT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KClcblx0d2Vla2RheXMgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXVxuXHRfdGVtcGxhdGVTZWxlY3RvcjogKGl0ZW06IENhbGVuZGFyTGlzdEl0ZW0sIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHN0cmluZztcblx0X3NlbGVjdGVkSW5kZXggPSAwXG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgXG5cdFx0Ly9DcmFzaCBvbiBpT1Mgd2hlbiB0ZW1wbGF0ZVNlbGVjdG9yIGlzIHNldFxuXHRcdHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IgPSB0aGlzLnRlbXBsYXRlU2VsZWN0b3JGdW5jdGlvbjtcblx0XHRcblx0XHR2YXIgc3RhcnREYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKClcblx0XHRzdGFydERhdGUgLT0gKDI1KnRoaXMuZGF5SW5NaWxsaXMpXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDUwOyBpbmRleCsrKSB7XG5cdFx0XHRzdGFydERhdGUgKz0gdGhpcy5kYXlJbk1pbGxpc1xuXHRcdFx0dmFyIHRlbXBsYXRlID0gXCJub3JtYWxcIlxuXHRcdFx0aWYoaW5kZXggPT0gMCl7XG5cdFx0XHRcdHRlbXBsYXRlPVwic2VsZWN0ZWRcIlxuXHRcdFx0fVxuXHRcdFx0dGhpcy5kYXRlcy5wdXNoKG5ldyBDYWxlbmRhckxpc3RJdGVtKG5ldyBEYXRlKHN0YXJ0RGF0ZSksIHRlbXBsYXRlKSlcblx0XHR9XG5cdFx0XG5cdFx0Ly9Jbml0aWFsIHNjcm9sbFxuXHRcdFxuXHR9XG5cblx0Z2V0IHRlbXBsYXRlU2VsZWN0b3IoKTogKGl0ZW06IENhbGVuZGFyTGlzdEl0ZW0sIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yO1xuICAgIH1cblxuICAgIHNldCB0ZW1wbGF0ZVNlbGVjdG9yKHZhbHVlOiAoaXRlbTogQ2FsZW5kYXJMaXN0SXRlbSwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4gc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGVtcGxhdGVTZWxlY3RvckZ1bmN0aW9uID0gKGl0ZW06IENhbGVuZGFyTGlzdEl0ZW0sIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udGVtcGxhdGU7XG5cdH1cblxuXHRpdGVtVGFwKGRhdGE6IExpc3RWaWV3RXZlbnREYXRhKXtcblx0XHRpZih0aGlzLl9zZWxlY3RlZEluZGV4ICE9IGRhdGEuaW5kZXgpe1xuXHRcdFx0Y29uc3QgbmV3U2VsZWN0aW9uID0gdGhpcy5kYXRlcy5nZXRJdGVtKGRhdGEuaW5kZXgpXG5cdFx0XHRjb25zdCBvbGRTZWxlY3Rpb24gPSB0aGlzLmRhdGVzLmdldEl0ZW0odGhpcy5fc2VsZWN0ZWRJbmRleClcblx0XHRcdG9sZFNlbGVjdGlvbi50ZW1wbGF0ZSA9IFwibm9ybWFsXCJcblx0XHRcdG5ld1NlbGVjdGlvbi50ZW1wbGF0ZSA9IFwic2VsZWN0ZWRcIlxuXHRcdFx0dGhpcy5kYXRlcy5zZXRJdGVtKGRhdGEuaW5kZXgsIG5ld1NlbGVjdGlvbilcblx0XHRcdHRoaXMuZGF0ZXMuc2V0SXRlbSh0aGlzLl9zZWxlY3RlZEluZGV4LCBvbGRTZWxlY3Rpb24pXG5cdFx0XHR0aGlzLl9zZWxlY3RlZEluZGV4ID0gZGF0YS5pbmRleFxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJMaXN0SXRlbXtcblx0X2RhdGU6IERhdGVcblx0X3RlbXBsYXRlOiBzdHJpbmdcblxuXHRjb25zdHJ1Y3RvcihkYXRlOiBEYXRlLCB0ZW1wbGF0ZTogc3RyaW5nKXtcblx0XHR0aGlzLl9kYXRlID0gZGF0ZVxuXHRcdHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGVcblx0fVxuXG5cdHB1YmxpYyBnZXQgdGVtcGxhdGUoKTogc3RyaW5ne1xuXHRcdHJldHVybiB0aGlzLl90ZW1wbGF0ZVxuXHR9XG5cdHB1YmxpYyBzZXQgdGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZyl7XG5cdFx0dGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXHR9XG5cblx0Z2V0IGRhdGUoKTogRGF0ZXtcblx0XHRyZXR1cm4gdGhpcy5fZGF0ZVxuXHR9XG5cdHNldCBkYXRlKGRhdGU6IERhdGUpe1xuXHRcdHRoaXMuX2RhdGUgPSBkYXRlXG5cdH1cbn0iXX0=