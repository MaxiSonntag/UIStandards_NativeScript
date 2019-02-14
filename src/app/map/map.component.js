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
            console.dir("MAP EVENT: " + event.eventName);
            console.dir("MAP EVENT: " + event.object);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFFeEUsMEVBQXNFO0FBRXRFLGdGQUFnRjtBQUNoRixrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUMsT0FBTyxFQUEvQyxDQUErQyxDQUFDLENBQUM7QUFDbEYsa0VBQW1IO0FBQ25ILHNEQUFxRDtBQUVyRCw0REFBMEU7QUFTMUU7SUFlQyxzQkFBb0IsSUFBVTtRQUE5QixpQkFBbUM7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFNO1FBWDlCLGNBQVMsR0FBRyxLQUFLLENBQUE7UUFDakIsa0JBQWEsR0FBVyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDeEQsY0FBUyxHQUFXLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3RELGVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQyxlQUFVLEdBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNqRixvQkFBZSxHQUFHLENBQUMsQ0FBQTtRQUNuQixhQUFRLEdBQWtCLEtBQUssRUFBRSxDQUFBO1FBQ2pDLFlBQU8sR0FBa0IsS0FBSyxFQUFFLENBQUE7UUFDaEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFBO1FBd0JyQixZQUFZO1FBQ1QsZUFBVSxHQUFHLFVBQUMsS0FBSztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUMxQyxPQUFP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WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbEMsQ0FBQzt5Q0FpQnlCLFdBQUk7T0FmbEIsWUFBWSxDQXVLeEI7SUFBRCxtQkFBQztDQUFBLEFBdktELElBdUtDO0FBdktZLG9DQUFZO0FBeUt6QjtJQUlDLGdCQUFZLFFBQWdCLEVBQUUsU0FBaUI7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7SUFDNUIsQ0FBQztJQUVELHNCQUFJLDRCQUFRO2FBQVo7WUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDdEIsQ0FBQzthQU1ELFVBQWEsUUFBZ0I7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7UUFDMUIsQ0FBQzs7O09BUkE7SUFFRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3ZCLENBQUM7YUFNRCxVQUFjLFNBQWlCO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFBO1FBQzVCLENBQUM7OztPQVJBO0lBU0YsYUFBQztBQUFELENBQUMsQUF4QkQsSUF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbi8vIEltcG9ydGFudCAtIG11c3QgcmVnaXN0ZXIgTWFwVmlldyBwbHVnaW4gaW4gb3JkZXIgdG8gdXNlIGluIEFuZ3VsYXIgdGVtcGxhdGVzXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCIpLk1hcFZpZXcpO1xuaW1wb3J0IHsgTWFwVmlldywgTWFya2VyLCBQb3NpdGlvbiwgTWFya2VyRXZlbnREYXRhLCBTdHlsZSwgUG9seWxpbmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkay9tYXAtdmlld1wiXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCB7IGtub3duRm9sZGVycywgRm9sZGVyLCBGaWxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnbWFwJyxcblx0dGVtcGxhdGVVcmw6ICcuL21hcC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL21hcC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoXCJtYXBWaWV3XCIpIG1hcFZpZXc6IEVsZW1lbnRSZWY7XG5cdG1hcDogTWFwVmlld1xuXHRfbWFwUmVhZHkgPSBmYWxzZVxuXHRfaW5vdmF0aW9uR2VvOiBMYXRMbmcgPSBuZXcgTGF0TG5nKDQ5LjY3NDgxMiwgMTIuMTU2ODY3KVxuXHRfYXBwbGVHZW86IExhdExuZyA9IG5ldyBMYXRMbmcoMzcuMzMyMjc5LCAtMTIyLjAzMDc2Milcblx0X2dvb2dsZUdlbyA9IG5ldyBMYXRMbmcoMzcuNDIyMTc5LCAtMTIyLjA4MzcxNClcblx0X2xvY2F0aW9uczogQXJyYXk8TGF0TG5nPiA9IFt0aGlzLl9pbm92YXRpb25HZW8sIHRoaXMuX2FwcGxlR2VvLCB0aGlzLl9nb29nbGVHZW9dXG5cdF9zZWxlY3RlZExvY0lkeCA9IDBcblx0X21hcmtlcnM6IEFycmF5PE1hcmtlcj4gPSBBcnJheSgpXG5cdF9zdHlsZXM6IEFycmF5PHN0cmluZz4gPSBBcnJheSgpXG5cdF9zZWxlY3RlZFN0eWxlSWR4ID0gMFxuXHRcbiAgICBcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgXG5cdFx0dGhpcy5fc2V0dXBTdHlsZXMoKVxuXHR9XG5cblx0X3NldHVwU3R5bGVzKCl7XG5cdFx0Y29uc3QgYXBwRm9sZGVyID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKVxuXHRcdGNvbnN0IHN0eWxlc0ZvbGRlciA9IGFwcEZvbGRlci5nZXRGb2xkZXIoXCJtYXBfc3R5bGVzXCIpXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcblx0XHRcdGNvbnN0IGZpbGUgPSBzdHlsZXNGb2xkZXIuZ2V0RmlsZShcInN0eWxlX1wiK2luZGV4K1wiLmpzb25cIilcblx0XHRcdGNvbnN0IGNvbnRlbnQgPSBmaWxlLnJlYWRUZXh0U3luYygpXG5cdFx0XHR0aGlzLl9zdHlsZXMucHVzaChjb250ZW50KVxuXHRcdH1cblx0fVxuXG5cdG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+dGhpcy5wYWdlLnBhcmVudC5wYXJlbnQ7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuXHQvL01hcCBldmVudHNcbiAgICBvbk1hcFJlYWR5ID0gKGV2ZW50KSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJNYXAgUmVhZHlcIik7XG5cdFx0Y29uc29sZS5kaXIoXCJNQVAgRVZFTlQ6IFwiK2V2ZW50LmV2ZW50TmFtZSlcblx0XHRjb25zb2xlLmRpcihcIk1BUCBFVkVOVDogXCIrZXZlbnQub2JqZWN0KVxuXHRcdHRoaXMuX21hcFJlYWR5ID0gdHJ1ZVxuXHRcdHRoaXMubWFwID0gdGhpcy5tYXBWaWV3Lm5hdGl2ZUVsZW1lbnRcblx0XHR0aGlzLm1hcC5tYXBBbmltYXRpb25zRW5hYmxlZCA9IHRydWVcblx0fTtcblxuXHR0b2dnbGVDb21wYXNzKCl7XG5cdFx0dGhpcy5tYXAuc2V0dGluZ3MuY29tcGFzc0VuYWJsZWQgPSAhdGhpcy5tYXAuc2V0dGluZ3MuY29tcGFzc0VuYWJsZWRcblx0fVxuXG5cdGdldENvbXBhc3NUZXh0KCk6IFN0cmluZ3tcblx0XHRpZih0aGlzLl9tYXBSZWFkeSl7XG5cdFx0XHRpZih0aGlzLm1hcC5zZXR0aW5ncy5jb21wYXNzRW5hYmxlZCl7XG5cdFx0XHRcdHJldHVybiBcIkRpc2FibGUgY29tcGFzc1wiXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gXCJFbmFibGUgY29tcGFzc1wiXG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlTXlMb2NhdGlvbigpe1xuXHRcdHRoaXMubWFwLnNldHRpbmdzLm15TG9jYXRpb25CdXR0b25FbmFibGVkID0gIXRoaXMubWFwLnNldHRpbmdzLm15TG9jYXRpb25CdXR0b25FbmFibGVkXG5cdH1cblxuXHRnZXRNeUxvY2F0aW9uVGV4dCgpOiBTdHJpbmd7XG5cdFx0aWYodGhpcy5fbWFwUmVhZHkpe1xuXHRcdFx0aWYodGhpcy5tYXAuc2V0dGluZ3MubXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWQpe1xuXHRcdFx0XHRyZXR1cm4gXCJEaXNhYmxlIG15IGxvY2F0aW9uXCJcblx0XHRcdH1cblx0XHRcdHJldHVybiBcIkVuYWJsZSBteSBsb2NhdGlvblwiXG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlUm90YXRpb24oKXtcblx0XHR0aGlzLm1hcC5zZXR0aW5ncy5yb3RhdGVHZXN0dXJlc0VuYWJsZWQgPSAhdGhpcy5tYXAuc2V0dGluZ3Mucm90YXRlR2VzdHVyZXNFbmFibGVkXG5cdH1cblxuXHRnZXRSb3RhdGlvblRleHQoKTogU3RyaW5ne1xuXHRcdGlmKHRoaXMuX21hcFJlYWR5KXtcblx0XHRcdGlmKHRoaXMubWFwLnNldHRpbmdzLnJvdGF0ZUdlc3R1cmVzRW5hYmxlZCl7XG5cdFx0XHRcdHJldHVybiBcIkRpc2FibGUgcm90YXRpb25cIlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFwiRW5hYmxlIHJvdGF0aW9uXCJcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVab29tKCl7XG5cdFx0dGhpcy5tYXAuc2V0dGluZ3Muem9vbUdlc3R1cmVzRW5hYmxlZCA9ICF0aGlzLm1hcC5zZXR0aW5ncy56b29tR2VzdHVyZXNFbmFibGVkXG5cdH1cblxuXHRnZXRab29tVGV4dCgpOiBTdHJpbmd7XG5cdFx0aWYodGhpcy5fbWFwUmVhZHkpe1xuXHRcdFx0aWYodGhpcy5tYXAuc2V0dGluZ3Muem9vbUdlc3R1cmVzRW5hYmxlZCl7XG5cdFx0XHRcdHJldHVybiBcIkRpc2FibGUgem9vbVwiXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gXCJFbmFibGUgem9vbVwiXG5cdFx0fVxuXHR9XG5cdFxuXHRjaGFuZ2VMb2NhdGlvbigpe1xuXHRcdHRoaXMuX3NlbGVjdGVkTG9jSWR4Kys7XG5cdFx0Y29uc3QgX2xvY2F0aW9uID0gdGhpcy5fbG9jYXRpb25zW3RoaXMuX3NlbGVjdGVkTG9jSWR4JXRoaXMuX2xvY2F0aW9ucy5sZW5ndGhdXG5cdFx0dGhpcy5tYXAubGF0aXR1ZGUgPSBfbG9jYXRpb24ubGF0aXR1ZGVcblx0XHR0aGlzLm1hcC5sb25naXR1ZGUgPSBfbG9jYXRpb24ubG9uZ2l0dWRlXG5cdFx0dGhpcy5tYXAuem9vbSA9IDE3LjBcblx0XHR0aGlzLm1hcC50aWx0ID0gMzAuMFxuXHR9XG5cblx0YWRkTWFya2VyKCl7XG5cdFx0Y29uc3QgbWFya2VyID0gbmV3IE1hcmtlcigpXG5cdFx0bWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHRoaXMubWFwLmxhdGl0dWRlLCB0aGlzLm1hcC5sb25naXR1ZGUpXG5cdFx0Y29uc3QgbG9jID0gbmV3IExhdExuZyh0aGlzLm1hcC5sYXRpdHVkZSwgdGhpcy5tYXAubG9uZ2l0dWRlKVxuXHRcdGxvYy5sYXRpdHVkZSA9IHRoaXMuX3JvdW5kTnVtYmVyVG9EaWdpdHNBZnRlckNvbW1hKGxvYy5sYXRpdHVkZSwgNSlcblx0XHRsb2MubG9uZ2l0dWRlID0gdGhpcy5fcm91bmROdW1iZXJUb0RpZ2l0c0FmdGVyQ29tbWEobG9jLmxvbmdpdHVkZSwgNSlcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fbG9jYXRpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX2xvY2F0aW9uc1tpbmRleF07XG5cdFx0XHRlbGVtZW50LmxhdGl0dWRlID0gdGhpcy5fcm91bmROdW1iZXJUb0RpZ2l0c0FmdGVyQ29tbWEoZWxlbWVudC5sYXRpdHVkZSwgNSlcblx0XHRcdGVsZW1lbnQubG9uZ2l0dWRlID0gdGhpcy5fcm91bmROdW1iZXJUb0RpZ2l0c0FmdGVyQ29tbWEoZWxlbWVudC5sb25naXR1ZGUsIDUpXG5cdFx0XHR2YXIgdGl0bGUgPSBcIk5vIGluZm8gYXZhaWxhYmxlXCJcblx0XHRcdHZhciBzbmlwcGV0ID0gXCJcIlxuXHRcdFx0aWYoZWxlbWVudC5sYXRpdHVkZSA9PSBsb2MubGF0aXR1ZGUgJiYgZWxlbWVudC5sb25naXR1ZGUgPT0gbG9jLmxvbmdpdHVkZSl7XG5cdFx0XHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdFx0XHR0aXRsZSA9IFwiaS1ub3ZhdGlvblwiXG5cdFx0XHRcdFx0XHRzbmlwcGV0ID0gXCJXZWlkZW5cIlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0dGl0bGUgPSBcIkFwcGxlXCJcblx0XHRcdFx0XHRcdHNuaXBwZXQgPSBcIkluZmluaXRlIExvb3BcIlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0dGl0bGUgPSBcIkdvb2dsZVwiXG5cdFx0XHRcdFx0XHRzbmlwcGV0ID0gXCJHb29nbGVwbGV4XCJcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVx0XG5cdFx0fVxuXHRcdG1hcmtlci50aXRsZSA9IHRpdGxlXG5cdFx0bWFya2VyLnNuaXBwZXQgPSBzbmlwcGV0XG5cdFx0dGhpcy5fbWFya2Vycy5wdXNoKG1hcmtlcilcblx0XHR0aGlzLm1hcC5hZGRNYXJrZXIobWFya2VyKVxuXHR9XG5cblx0X3JvdW5kTnVtYmVyVG9EaWdpdHNBZnRlckNvbW1hKHZhbHVlOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyKTogbnVtYmVye1xuXHRcdHJldHVybiBOdW1iZXIodmFsdWUudG9GaXhlZChkaWdpdHMpKVxuXHR9XG5cblx0bWFya2VyU2VsZWN0ZWQoZXZlbnQ6IE1hcmtlckV2ZW50RGF0YSl7XG5cdFx0dGhpcy5fbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpPT57XG5cdFx0XHRpZihtYXJrZXIgIT0gZXZlbnQubWFya2VyKXtcblx0XHRcdFx0bWFya2VyLmNvbG9yID0gXCJyZWRcIlxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0ZXZlbnQubWFya2VyLmNvbG9yID0gXCJibHVlXCJcblx0fVxuXG5cdHJlbW92ZU1hcmtlcnMoKXtcblx0XHR0aGlzLm1hcC5yZW1vdmVBbGxNYXJrZXJzKClcblx0XHR0aGlzLl9tYXJrZXJzID0gQXJyYXk8TWFya2VyPigpXG5cdH1cblxuXHRjaGFuZ2VTdHlsZSgpe1xuXHRcdHRoaXMuX3NlbGVjdGVkU3R5bGVJZHgrK1xuXHRcdGNvbnN0IHN0eWxlID0gPFN0eWxlPkpTT04ucGFyc2UodGhpcy5fc3R5bGVzW3RoaXMuX3NlbGVjdGVkU3R5bGVJZHgldGhpcy5fc3R5bGVzLmxlbmd0aF0pXG5cdFx0dGhpcy5tYXAuc2V0U3R5bGUoc3R5bGUpXG5cdFx0XG5cdH1cbn1cblxuY2xhc3MgTGF0TG5ne1xuXHRfbGF0aXR1ZGU6IG51bWJlclxuXHRfbG9uZ2l0dWRlOiBudW1iZXJcblxuXHRjb25zdHJ1Y3RvcihsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcil7XG5cdFx0dGhpcy5fbGF0aXR1ZGUgPSBsYXRpdHVkZVxuXHRcdHRoaXMuX2xvbmdpdHVkZSA9IGxvbmdpdHVkZVxuXHR9XG5cblx0Z2V0IGxhdGl0dWRlKCk6IG51bWJlcntcblx0XHRyZXR1cm4gdGhpcy5fbGF0aXR1ZGVcblx0fVxuXG5cdGdldCBsb25naXR1ZGUoKTogbnVtYmVye1xuXHRcdHJldHVybiB0aGlzLl9sb25naXR1ZGVcblx0fVxuXG5cdHNldCBsYXRpdHVkZShsYXRpdHVkZTogbnVtYmVyKXtcblx0XHR0aGlzLl9sYXRpdHVkZSA9IGxhdGl0dWRlXG5cdH1cblxuXHRzZXQgbG9uZ2l0dWRlKGxvbmdpdHVkZTogbnVtYmVyKXtcblx0XHR0aGlzLl9sb25naXR1ZGUgPSBsb25naXR1ZGVcblx0fVxufSJdfQ==