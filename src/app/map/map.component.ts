import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';

import {registerElement} from "nativescript-angular/element-registry";

// Important - must register MapView plugin in order to use in Angular templates
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
import { MapView, Marker, Position, MarkerEventData, Style, Polyline } from "nativescript-google-maps-sdk/map-view"
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { knownFolders, Folder, File } from "tns-core-modules/file-system";

@Component({
	moduleId: module.id,
	selector: 'map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

	@ViewChild("mapView") mapView: ElementRef;
	map: MapView
	_mapReady = false
	_inovationGeo: LatLng = new LatLng(49.674812, 12.156867)
	_appleGeo: LatLng = new LatLng(37.332279, -122.030762)
	_googleGeo = new LatLng(37.422179, -122.083714)
	_locations: Array<LatLng> = [this._inovationGeo, this._appleGeo, this._googleGeo]
	_selectedLocIdx = 0
	_markers: Array<Marker> = Array()
	_styles: Array<string> = Array()
	_selectedStyleIdx = 0
	
    
	constructor(private page: Page) { }

	ngOnInit() { 
		this._setupStyles()
	}

	_setupStyles(){
		const appFolder = knownFolders.currentApp()
		const stylesFolder = appFolder.getFolder("map_styles")
		for (let index = 0; index < 4; index++) {
			const file = stylesFolder.getFile("style_"+index+".json")
			const content = file.readTextSync()
			this._styles.push(content)
		}
	}

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.page.parent.parent;
        sideDrawer.showDrawer();
    }

	//Map events
    onMapReady = (event) => {
		console.log("Map Ready");
		this._mapReady = true
		this.map = this.mapView.nativeElement
		this.map.mapAnimationsEnabled = true
	};

	toggleCompass(){
		this.map.settings.compassEnabled = !this.map.settings.compassEnabled
	}

	getCompassText(): String{
		if(this._mapReady){
			if(this.map.settings.compassEnabled){
				return "Disable compass"
			}
			return "Enable compass"
		}
	}

	toggleMyLocation(){
		this.map.settings.myLocationButtonEnabled = !this.map.settings.myLocationButtonEnabled
	}

	getMyLocationText(): String{
		if(this._mapReady){
			if(this.map.settings.myLocationButtonEnabled){
				return "Disable my location"
			}
			return "Enable my location"
		}
	}

	toggleRotation(){
		this.map.settings.rotateGesturesEnabled = !this.map.settings.rotateGesturesEnabled
	}

	getRotationText(): String{
		if(this._mapReady){
			if(this.map.settings.rotateGesturesEnabled){
				return "Disable rotation"
			}
			return "Enable rotation"
		}
	}

	toggleZoom(){
		this.map.settings.zoomGesturesEnabled = !this.map.settings.zoomGesturesEnabled
	}

	getZoomText(): String{
		if(this._mapReady){
			if(this.map.settings.zoomGesturesEnabled){
				return "Disable zoom"
			}
			return "Enable zoom"
		}
	}
	
	changeLocation(){
		this._selectedLocIdx++;
		const _location = this._locations[this._selectedLocIdx%this._locations.length]
		this.map.latitude = _location.latitude
		this.map.longitude = _location.longitude
		this.map.zoom = 17.0
		this.map.tilt = 30.0
	}

	addMarker(){
		const marker = new Marker()
		marker.position = Position.positionFromLatLng(this.map.latitude, this.map.longitude)
		const loc = new LatLng(this.map.latitude, this.map.longitude)
		loc.latitude = this._roundNumberToDigitsAfterComma(loc.latitude, 5)
		loc.longitude = this._roundNumberToDigitsAfterComma(loc.longitude, 5)
		for (let index = 0; index < this._locations.length; index++) {
			const element = this._locations[index];
			element.latitude = this._roundNumberToDigitsAfterComma(element.latitude, 5)
			element.longitude = this._roundNumberToDigitsAfterComma(element.longitude, 5)
			var title = "No info available"
			var snippet = ""
			if(element.latitude == loc.latitude && element.longitude == loc.longitude){
				switch (index) {
					case 0:
						title = "i-novation"
						snippet = "Weiden"
						break;
					case 1:
						title = "Apple"
						snippet = "Infinite Loop"
						break;
					case 2:
						title = "Google"
						snippet = "Googleplex"
						break;
				}
				break;
			}	
		}
		marker.title = title
		marker.snippet = snippet
		this._markers.push(marker)
		this.map.addMarker(marker)
	}

	_roundNumberToDigitsAfterComma(value: number, digits: number): number{
		return Number(value.toFixed(digits))
	}

	markerSelected(event: MarkerEventData){
		this._markers.forEach((marker)=>{
			if(marker != event.marker){
				marker.color = "red"
			}
		})
		event.marker.color = "blue"
	}

	removeMarkers(){
		this.map.removeAllMarkers()
		this._markers = Array<Marker>()
	}

	changeStyle(){
		this._selectedStyleIdx++
		const style = <Style>JSON.parse(this._styles[this._selectedStyleIdx%this._styles.length])
		this.map.setStyle(style)
		
	}
}

class LatLng{
	_latitude: number
	_longitude: number

	constructor(latitude: number, longitude: number){
		this._latitude = latitude
		this._longitude = longitude
	}

	get latitude(): number{
		return this._latitude
	}

	get longitude(): number{
		return this._longitude
	}

	set latitude(latitude: number){
		this._latitude = latitude
	}

	set longitude(longitude: number){
		this._longitude = longitude
	}
}