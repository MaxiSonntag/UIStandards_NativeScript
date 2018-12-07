"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
// Important - must register MapView plugin in order to use in Angular templates
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var map_view_1 = require("nativescript-google-maps-sdk/map-view");
var page_1 = require("tns-core-modules/ui/page/page");
var file_system_1 = require("tns-core-modules/file-system");
var MapComponent = /** @class */ (function () {
    function MapComponent(page) {
        var _this = this;
        this.page = page;
        this._mapReady = false;
        this._inovationGeo = new LatLng(49.674812, 12.156867);
        this._appleGeo = new LatLng(37.332279, -122.030762);
        this._googleGeo = new LatLng(37.422179, -122.083714);
        this._locations = [this._inovationGeo, this._appleGeo, this._googleGeo];
        this._selectedLocIdx = 0;
        this._markers = Array();
        this._styles = Array();
        this._selectedStyleIdx = 0;
        //Map events
        this.onMapReady = function (event) {
            console.log("Map Ready");
            _this._mapReady = true;
            _this.map = _this.mapView.nativeElement;
            _this.map.mapAnimationsEnabled = true;
        };
    }
    MapComponent.prototype.ngOnInit = function () {
        this._setupStyles();
    };
    MapComponent.prototype._setupStyles = function () {
        var appFolder = file_system_1.knownFolders.currentApp();
        var stylesFolder = appFolder.getFolder("map_styles");
        for (var index = 0; index < 4; index++) {
            var file = stylesFolder.getFile("style_" + index + ".json");
            var content = file.readTextSync();
            this._styles.push(content);
        }
    };
    MapComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = this.page.parent.parent;
        sideDrawer.showDrawer();
    };
    MapComponent.prototype.toggleCompass = function () {
        this.map.settings.compassEnabled = !this.map.settings.compassEnabled;
    };
    MapComponent.prototype.getCompassText = function () {
        if (this._mapReady) {
            if (this.map.settings.compassEnabled) {
                return "Disable compass";
            }
            return "Enable compass";
        }
    };
    MapComponent.prototype.toggleMyLocation = function () {
        this.map.settings.myLocationButtonEnabled = !this.map.settings.myLocationButtonEnabled;
    };
    MapComponent.prototype.getMyLocationText = function () {
        if (this._mapReady) {
            if (this.map.settings.myLocationButtonEnabled) {
                return "Disable my location";
            }
            return "Enable my location";
        }
    };
    MapComponent.prototype.toggleRotation = function () {
        this.map.settings.rotateGesturesEnabled = !this.map.settings.rotateGesturesEnabled;
    };
    MapComponent.prototype.getRotationText = function () {
        if (this._mapReady) {
            if (this.map.settings.rotateGesturesEnabled) {
                return "Disable rotation";
            }
            return "Enable rotation";
        }
    };
    MapComponent.prototype.toggleZoom = function () {
        this.map.settings.zoomGesturesEnabled = !this.map.settings.zoomGesturesEnabled;
    };
    MapComponent.prototype.getZoomText = function () {
        if (this._mapReady) {
            if (this.map.settings.zoomGesturesEnabled) {
                return "Disable zoom";
            }
            return "Enable zoom";
        }
    };
    MapComponent.prototype.changeLocation = function () {
        this._selectedLocIdx++;
        var _location = this._locations[this._selectedLocIdx % this._locations.length];
        this.map.latitude = _location.latitude;
        this.map.longitude = _location.longitude;
        this.map.zoom = 17.0;
        this.map.tilt = 30.0;
    };
    MapComponent.prototype.addMarker = function () {
        var marker = new map_view_1.Marker();
        marker.position = map_view_1.Position.positionFromLatLng(this.map.latitude, this.map.longitude);
        var loc = new LatLng(this.map.latitude, this.map.longitude);
        loc.latitude = this._roundNumberToDigitsAfterComma(loc.latitude, 5);
        loc.longitude = this._roundNumberToDigitsAfterComma(loc.longitude, 5);
        for (var index = 0; index < this._locations.length; index++) {
            var element = this._locations[index];
            element.latitude = this._roundNumberToDigitsAfterComma(element.latitude, 5);
            element.longitude = this._roundNumberToDigitsAfterComma(element.longitude, 5);
            var title = "No info available";
            var snippet = "";
            if (element.latitude == loc.latitude && element.longitude == loc.longitude) {
                switch (index) {
                    case 0:
                        title = "i-novation";
                        snippet = "Weiden";
                        break;
                    case 1:
                        title = "Apple";
                        snippet = "Infinite Loop";
                        break;
                    case 2:
                        title = "Google";
                        snippet = "Googleplex";
                        break;
                }
                break;
            }
        }
        marker.title = title;
        marker.snippet = snippet;
        this._markers.push(marker);
        this.map.addMarker(marker);
    };
    MapComponent.prototype._roundNumberToDigitsAfterComma = function (value, digits) {
        return Number(value.toFixed(digits));
    };
    MapComponent.prototype.markerSelected = function (event) {
        this._markers.forEach(function (marker) {
            if (marker != event.marker) {
                marker.color = "red";
            }
        });
        event.marker.color = "blue";
    };
    MapComponent.prototype.removeMarkers = function () {
        this.map.removeAllMarkers();
        this._markers = Array();
    };
    MapComponent.prototype.changeStyle = function () {
        this._selectedStyleIdx++;
        var style = JSON.parse(this._styles[this._selectedStyleIdx % this._styles.length]);
        this.map.setStyle(style);
    };
    __decorate([
        core_1.ViewChild("mapView"),
        __metadata("design:type", core_1.ElementRef)
    ], MapComponent.prototype, "mapView", void 0);
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
var LatLng = /** @class */ (function () {
    function LatLng(latitude, longitude) {
        this._latitude = latitude;
        this._longitude = longitude;
    }
    Object.defineProperty(LatLng.prototype, "latitude", {
        get: function () {
            return this._latitude;
        },
        set: function (latitude) {
            this._latitude = latitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLng.prototype, "longitude", {
        get: function () {
            return this._longitude;
        },
        set: function (longitude) {
            this._longitude = longitude;
        },
        enumerable: true,
        configurable: true
    });
    return LatLng;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFFeEUsMEVBQXNFO0FBRXRFLGdGQUFnRjtBQUNoRixrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUMsT0FBTyxFQUEvQyxDQUErQyxDQUFDLENBQUM7QUFDbEYsa0VBQW1IO0FBQ25ILHNEQUFxRDtBQUVyRCw0REFBMEU7QUFTMUU7SUFlQyxzQkFBb0IsSUFBVTtRQUE5QixpQkFBbUM7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFNO1FBWDlCLGNBQVMsR0FBRyxLQUFLLENBQUE7UUFDakIsa0JBQWEsR0FBVyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDeEQsY0FBUyxHQUFXLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3RELGVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQyxlQUFVLEdBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNqRixvQkFBZSxHQUFHLENBQUMsQ0FBQTtRQUNuQixhQUFRLEdBQWtCLEtBQUssRUFBRSxDQUFBO1FBQ2pDLFlBQU8sR0FBa0IsS0FBSyxFQUFFLENBQUE7UUFDaEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFBO1FBd0JyQixZQUFZO1FBQ1QsZUFBVSxHQUFHLFVBQUMsS0FBSztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1lBQ3JCLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFD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SUFJQyxnQkFBWSxRQUFnQixFQUFFLFNBQWlCO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFBO0lBQzVCLENBQUM7SUFFRCxzQkFBSSw0QkFBUTthQUFaO1lBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3RCLENBQUM7YUFNRCxVQUFhLFFBQWdCO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1FBQzFCLENBQUM7OztPQVJBO0lBRUQsc0JBQUksNkJBQVM7YUFBYjtZQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtRQUN2QixDQUFDO2FBTUQsVUFBYyxTQUFpQjtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtRQUM1QixDQUFDOzs7T0FSQTtJQVNGLGFBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuXG4vLyBJbXBvcnRhbnQgLSBtdXN0IHJlZ2lzdGVyIE1hcFZpZXcgcGx1Z2luIGluIG9yZGVyIHRvIHVzZSBpbiBBbmd1bGFyIHRlbXBsYXRlc1xucmVnaXN0ZXJFbGVtZW50KFwiTWFwVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKS5NYXBWaWV3KTtcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24sIE1hcmtlckV2ZW50RGF0YSwgU3R5bGUsIFBvbHlsaW5lIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsvbWFwLXZpZXdcIlxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMsIEZvbGRlciwgRmlsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ21hcCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9tYXAuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9tYXAuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKFwibWFwVmlld1wiKSBtYXBWaWV3OiBFbGVtZW50UmVmO1xuXHRtYXA6IE1hcFZpZXdcblx0X21hcFJlYWR5ID0gZmFsc2Vcblx0X2lub3ZhdGlvbkdlbzogTGF0TG5nID0gbmV3IExhdExuZyg0OS42NzQ4MTIsIDEyLjE1Njg2Nylcblx0X2FwcGxlR2VvOiBMYXRMbmcgPSBuZXcgTGF0TG5nKDM3LjMzMjI3OSwgLTEyMi4wMzA3NjIpXG5cdF9nb29nbGVHZW8gPSBuZXcgTGF0TG5nKDM3LjQyMjE3OSwgLTEyMi4wODM3MTQpXG5cdF9sb2NhdGlvbnM6IEFycmF5PExhdExuZz4gPSBbdGhpcy5faW5vdmF0aW9uR2VvLCB0aGlzLl9hcHBsZUdlbywgdGhpcy5fZ29vZ2xlR2VvXVxuXHRfc2VsZWN0ZWRMb2NJZHggPSAwXG5cdF9tYXJrZXJzOiBBcnJheTxNYXJrZXI+ID0gQXJyYXkoKVxuXHRfc3R5bGVzOiBBcnJheTxzdHJpbmc+ID0gQXJyYXkoKVxuXHRfc2VsZWN0ZWRTdHlsZUlkeCA9IDBcblx0XG4gICAgXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdHRoaXMuX3NldHVwU3R5bGVzKClcblx0fVxuXG5cdF9zZXR1cFN0eWxlcygpe1xuXHRcdGNvbnN0IGFwcEZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKClcblx0XHRjb25zdCBzdHlsZXNGb2xkZXIgPSBhcHBGb2xkZXIuZ2V0Rm9sZGVyKFwibWFwX3N0eWxlc1wiKVxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XG5cdFx0XHRjb25zdCBmaWxlID0gc3R5bGVzRm9sZGVyLmdldEZpbGUoXCJzdHlsZV9cIitpbmRleCtcIi5qc29uXCIpXG5cdFx0XHRjb25zdCBjb250ZW50ID0gZmlsZS5yZWFkVGV4dFN5bmMoKVxuXHRcdFx0dGhpcy5fc3R5bGVzLnB1c2goY29udGVudClcblx0XHR9XG5cdH1cblxuXHRvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPnRoaXMucGFnZS5wYXJlbnQucGFyZW50O1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cblx0Ly9NYXAgZXZlbnRzXG4gICAgb25NYXBSZWFkeSA9IChldmVudCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiTWFwIFJlYWR5XCIpO1xuXHRcdHRoaXMuX21hcFJlYWR5ID0gdHJ1ZVxuXHRcdHRoaXMubWFwID0gdGhpcy5tYXBWaWV3Lm5hdGl2ZUVsZW1lbnRcblx0XHR0aGlzLm1hcC5tYXBBbmltYXRpb25zRW5hYmxlZCA9IHRydWVcblx0fTtcblxuXHR0b2dnbGVDb21wYXNzKCl7XG5cdFx0dGhpcy5tYXAuc2V0dGluZ3MuY29tcGFzc0VuYWJsZWQgPSAhdGhpcy5tYXAuc2V0dGluZ3MuY29tcGFzc0VuYWJsZWRcblx0fVxuXG5cdGdldENvbXBhc3NUZXh0KCk6IFN0cmluZ3tcblx0XHRpZih0aGlzLl9tYXBSZWFkeSl7XG5cdFx0XHRpZih0aGlzLm1hcC5zZXR0aW5ncy5jb21wYXNzRW5hYmxlZCl7XG5cdFx0XHRcdHJldHVybiBcIkRpc2FibGUgY29tcGFzc1wiXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gXCJFbmFibGUgY29tcGFzc1wiXG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlTXlMb2NhdGlvbigpe1xuXHRcdHRoaXMubWFwLnNldHRpbmdzLm15TG9jYXRpb25CdXR0b25FbmFibGVkID0gIXRoaXMubWFwLnNldHRpbmdzLm15TG9jYXRpb25CdXR0b25FbmFibGVkXG5cdH1cblxuXHRnZXRNeUxvY2F0aW9uVGV4dCgpOiBTdHJpbmd7XG5cdFx0aWYodGhpcy5fbWFwUmVhZHkpe1xuXHRcdFx0aWYodGhpcy5tYXAuc2V0dGluZ3MubXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWQpe1xuXHRcdFx0XHRyZXR1cm4gXCJEaXNhYmxlIG15IGxvY2F0aW9uXCJcblx0XHRcdH1cblx0XHRcdHJldHVybiBcIkVuYWJsZSBteSBsb2NhdGlvblwiXG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlUm90YXRpb24oKXtcblx0XHR0aGlzLm1hcC5zZXR0aW5ncy5yb3RhdGVHZXN0dXJlc0VuYWJsZWQgPSAhdGhpcy5tYXAuc2V0dGluZ3Mucm90YXRlR2VzdHVyZXNFbmFibGVkXG5cdH1cblxuXHRnZXRSb3RhdGlvblRleHQoKTogU3RyaW5ne1xuXHRcdGlmKHRoaXMuX21hcFJlYWR5KXtcblx0XHRcdGlmKHRoaXMubWFwLnNldHRpbmdzLnJvdGF0ZUdlc3R1cmVzRW5hYmxlZCl7XG5cdFx0XHRcdHJldHVybiBcIkRpc2FibGUgcm90YXRpb25cIlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFwiRW5hYmxlIHJvdGF0aW9uXCJcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVab29tKCl7XG5cdFx0dGhpcy5tYXAuc2V0dGluZ3Muem9vbUdlc3R1cmVzRW5hYmxlZCA9ICF0aGlzLm1hcC5zZXR0aW5ncy56b29tR2VzdHVyZXNFbmFibGVkXG5cdH1cblxuXHRnZXRab29tVGV4dCgpOiBTdHJpbmd7XG5cdFx0aWYodGhpcy5fbWFwUmVhZHkpe1xuXHRcdFx0aWYodGhpcy5tYXAuc2V0dGluZ3Muem9vbUdlc3R1cmVzRW5hYmxlZCl7XG5cdFx0XHRcdHJldHVybiBcIkRpc2FibGUgem9vbVwiXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gXCJFbmFibGUgem9vbVwiXG5cdFx0fVxuXHR9XG5cdFxuXHRjaGFuZ2VMb2NhdGlvbigpe1xuXHRcdHRoaXMuX3NlbGVjdGVkTG9jSWR4Kys7XG5cdFx0Y29uc3QgX2xvY2F0aW9uID0gdGhpcy5fbG9jYXRpb25zW3RoaXMuX3NlbGVjdGVkTG9jSWR4JXRoaXMuX2xvY2F0aW9ucy5sZW5ndGhdXG5cdFx0dGhpcy5tYXAubGF0aXR1ZGUgPSBfbG9jYXRpb24ubGF0aXR1ZGVcblx0XHR0aGlzLm1hcC5sb25naXR1ZGUgPSBfbG9jYXRpb24ubG9uZ2l0dWRlXG5cdFx0dGhpcy5tYXAuem9vbSA9IDE3LjBcblx0XHR0aGlzLm1hcC50aWx0ID0gMzAuMFxuXHR9XG5cblx0YWRkTWFya2VyKCl7XG5cdFx0Y29uc3QgbWFya2VyID0gbmV3IE1hcmtlcigpXG5cdFx0bWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHRoaXMubWFwLmxhdGl0dWRlLCB0aGlzLm1hcC5sb25naXR1ZGUpXG5cdFx0Y29uc3QgbG9jID0gbmV3IExhdExuZyh0aGlzLm1hcC5sYXRpdHVkZSwgdGhpcy5tYXAubG9uZ2l0dWRlKVxuXHRcdGxvYy5sYXRpdHVkZSA9IHRoaXMuX3JvdW5kTnVtYmVyVG9EaWdpdHNBZnRlckNvbW1hKGxvYy5sYXRpdHVkZSwgNSlcblx0XHRsb2MubG9uZ2l0dWRlID0gdGhpcy5fcm91bmROdW1iZXJUb0RpZ2l0c0FmdGVyQ29tbWEobG9jLmxvbmdpdHVkZSwgNSlcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fbG9jYXRpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX2xvY2F0aW9uc1tpbmRleF07XG5cdFx0XHRlbGVtZW50LmxhdGl0dWRlID0gdGhpcy5fcm91bmROdW1iZXJUb0RpZ2l0c0FmdGVyQ29tbWEoZWxlbWVudC5sYXRpdHVkZSwgNSlcblx0XHRcdGVsZW1lbnQubG9uZ2l0dWRlID0gdGhpcy5fcm91bmROdW1iZXJUb0RpZ2l0c0FmdGVyQ29tbWEoZWxlbWVudC5sb25naXR1ZGUsIDUpXG5cdFx0XHR2YXIgdGl0bGUgPSBcIk5vIGluZm8gYXZhaWxhYmxlXCJcblx0XHRcdHZhciBzbmlwcGV0ID0gXCJcIlxuXHRcdFx0aWYoZWxlbWVudC5sYXRpdHVkZSA9PSBsb2MubGF0aXR1ZGUgJiYgZWxlbWVudC5sb25naXR1ZGUgPT0gbG9jLmxvbmdpdHVkZSl7XG5cdFx0XHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdFx0XHR0aXRsZSA9IFwiaS1ub3ZhdGlvblwiXG5cdFx0XHRcdFx0XHRzbmlwcGV0ID0gXCJXZWlkZW5cIlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0dGl0bGUgPSBcIkFwcGxlXCJcblx0XHRcdFx0XHRcdHNuaXBwZXQgPSBcIkluZmluaXRlIExvb3BcIlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0dGl0bGUgPSBcIkdvb2dsZVwiXG5cdFx0XHRcdFx0XHRzbmlwcGV0ID0gXCJHb29nbGVwbGV4XCJcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVx0XG5cdFx0fVxuXHRcdG1hcmtlci50aXRsZSA9IHRpdGxlXG5cdFx0bWFya2VyLnNuaXBwZXQgPSBzbmlwcGV0XG5cdFx0dGhpcy5fbWFya2Vycy5wdXNoKG1hcmtlcilcblx0XHR0aGlzLm1hcC5hZGRNYXJrZXIobWFya2VyKVxuXHR9XG5cblx0X3JvdW5kTnVtYmVyVG9EaWdpdHNBZnRlckNvbW1hKHZhbHVlOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyKTogbnVtYmVye1xuXHRcdHJldHVybiBOdW1iZXIodmFsdWUudG9GaXhlZChkaWdpdHMpKVxuXHR9XG5cblx0bWFya2VyU2VsZWN0ZWQoZXZlbnQ6IE1hcmtlckV2ZW50RGF0YSl7XG5cdFx0dGhpcy5fbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpPT57XG5cdFx0XHRpZihtYXJrZXIgIT0gZXZlbnQubWFya2VyKXtcblx0XHRcdFx0bWFya2VyLmNvbG9yID0gXCJyZWRcIlxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0ZXZlbnQubWFya2VyLmNvbG9yID0gXCJibHVlXCJcblx0fVxuXG5cdHJlbW92ZU1hcmtlcnMoKXtcblx0XHR0aGlzLm1hcC5yZW1vdmVBbGxNYXJrZXJzKClcblx0XHR0aGlzLl9tYXJrZXJzID0gQXJyYXk8TWFya2VyPigpXG5cdH1cblxuXHRjaGFuZ2VTdHlsZSgpe1xuXHRcdHRoaXMuX3NlbGVjdGVkU3R5bGVJZHgrK1xuXHRcdGNvbnN0IHN0eWxlID0gPFN0eWxlPkpTT04ucGFyc2UodGhpcy5fc3R5bGVzW3RoaXMuX3NlbGVjdGVkU3R5bGVJZHgldGhpcy5fc3R5bGVzLmxlbmd0aF0pXG5cdFx0dGhpcy5tYXAuc2V0U3R5bGUoc3R5bGUpXG5cdFx0XG5cdH1cbn1cblxuY2xhc3MgTGF0TG5ne1xuXHRfbGF0aXR1ZGU6IG51bWJlclxuXHRfbG9uZ2l0dWRlOiBudW1iZXJcblxuXHRjb25zdHJ1Y3RvcihsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcil7XG5cdFx0dGhpcy5fbGF0aXR1ZGUgPSBsYXRpdHVkZVxuXHRcdHRoaXMuX2xvbmdpdHVkZSA9IGxvbmdpdHVkZVxuXHR9XG5cblx0Z2V0IGxhdGl0dWRlKCk6IG51bWJlcntcblx0XHRyZXR1cm4gdGhpcy5fbGF0aXR1ZGVcblx0fVxuXG5cdGdldCBsb25naXR1ZGUoKTogbnVtYmVye1xuXHRcdHJldHVybiB0aGlzLl9sb25naXR1ZGVcblx0fVxuXG5cdHNldCBsYXRpdHVkZShsYXRpdHVkZTogbnVtYmVyKXtcblx0XHR0aGlzLl9sYXRpdHVkZSA9IGxhdGl0dWRlXG5cdH1cblxuXHRzZXQgbG9uZ2l0dWRlKGxvbmdpdHVkZTogbnVtYmVyKXtcblx0XHR0aGlzLl9sb25naXR1ZGUgPSBsb25naXR1ZGVcblx0fVxufSJdfQ==