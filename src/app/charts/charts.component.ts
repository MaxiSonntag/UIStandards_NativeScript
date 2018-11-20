import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { knownFolders, Folder, File } from "tns-core-modules/file-system";
import { async } from 'rxjs/internal/scheduler/async';
import { User } from "./shared/user.model"
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { map } from 'rxjs/operators';
import { ChartEventData, TrackballCustomContentData, DateTimeCategoricalAxis } from 'nativescript-ui-chart';
import { DateTimeContinuousAxisDirective } from 'nativescript-ui-chart/angular/chart-directives';
import { monthProperty } from 'tns-core-modules/ui/date-picker/date-picker';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
	moduleId: module.id,
	selector: 'charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {

	users: ObservableArray<User> = new ObservableArray();
	usersPerYear: ObservableArray<UsersPerYear> = new ObservableArray();
	selectedYear: String = ""
	selectedNumber: String = ""
	moreInformationVisible = "hidden"
	_deselectedForIndex: number

	constructor(private page: Page) { }

	ngOnInit() { 
		this._loadJsonFromFile().then(()=>this._createChartSourceArray())
	}

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.page.parent.parent;
        sideDrawer.showDrawer();
    }


	async _loadJsonFromFile(){
		const appFolder = knownFolders.currentApp()
		const dataFolder = appFolder.getFolder("sample_data")
		const jsonFile = dataFolder.getFile("sample_json.json")
		const json = await jsonFile.readText()
		
		const jsonObj = JSON.parse(json) as Array<Map<String, any>>
		//console.log("JSON: "+jsonObj)
		console.log("Users Array will be nearly ready")
		var tempArray: Array<User> = new Array()
		jsonObj.forEach((obj)=>{tempArray.push(new User(obj["name"], obj["age"], new Date(Date.parse((obj["registered"] as String).replace(" ","")))))})
		console.log("Users Array nearly ready")
		
		tempArray.sort((user1, user2)=>user1.registered.getTime()-user2.registered.getTime())
		this.users = new ObservableArray(tempArray)
		console.log("Users Array ready")
	}

	_createChartSourceArray(){
		var mapped : Map<number, Array<User>> = new Map();
		this.users.forEach((user)=>{
			var year = Math.floor(user.registered.getFullYear());
			if(mapped.has(year)){
				mapped.get(year).push(user)
			}
			else{
				mapped.set(year, new Array<User>(user))
			}
		})
		var temp = new Array()
		mapped.forEach((users, year)=>{
			temp.push(new UsersPerYear(year.toString(), users.length-1))
		})
		temp.sort((user1, user2)=>(user1.year as number) - (user2.year as number))
		this.usersPerYear = new ObservableArray(temp)
	}

	pointSelected(event: ChartEventData){
		this.moreInformationVisible = "visible"
		var selected = this.usersPerYear.getItem(event.pointIndex)
		this.selectedYear = selected.year
		this.selectedNumber = selected.number.toString()
		
	}

	pointDeselected(event: TrackballCustomContentData){
		this._deselectedForIndex = event.pointIndex
		if(this.usersPerYear.getItem(this._deselectedForIndex).year == this.selectedYear){
			this.moreInformationVisible = "hidden"
		}
		
	}

	trackballRequested(event: TrackballCustomContentData){
		var selected = this.usersPerYear.getItem(event.pointIndex)
		event.content = selected.number+" users"
	}
}

export class UsersPerYear{
	constructor(public year: String, public number: number){}
}