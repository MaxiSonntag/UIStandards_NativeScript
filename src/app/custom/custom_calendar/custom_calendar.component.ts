import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadListView, ListViewEventData } from 'nativescript-ui-listview';
import { ActionBar } from 'tns-core-modules/ui/action-bar/action-bar';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

@Component({
	moduleId: module.id,
	selector: 'CustomCalendar',
	templateUrl: './custom_calendar.component.html',
	styleUrls: ['./custom_calendar.component.css']
})

export class CustomCalendarComponent implements OnInit {

	dayInMillis = 86400000
	dates : ObservableArray<CalendarListItem> = new ObservableArray()
	weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	_templateSelector: (item: CalendarListItem, index: number, items: any) => string;
	_selectedIndex = 0

	constructor(private page: Page) { }

	ngOnInit() { 
		//Crash on iOS when templateSelector is set
		this._templateSelector = this.templateSelectorFunction;
		
		var startDate = new Date().getTime()
		startDate -= (25*this.dayInMillis)
		for (let index = 0; index < 50; index++) {
			startDate += this.dayInMillis
			var template = "normal"
			if(index == 0){
				template="selected"
			}
			this.dates.push(new CalendarListItem(new Date(startDate), template))
		}
		
		//Initial scroll
		
	}

	get templateSelector(): (item: CalendarListItem, index: number, items: any) => string {
        return this._templateSelector;
    }

    set templateSelector(value: (item: CalendarListItem, index: number, items: any) => string) {
        this._templateSelector = value;
    }

    public templateSelectorFunction = (item: CalendarListItem, index: number, items: any) => {
        return item.template;
	}

	itemTap(data: ListViewEventData){
		if(this._selectedIndex != data.index){
			const newSelection = this.dates.getItem(data.index)
			const oldSelection = this.dates.getItem(this._selectedIndex)
			oldSelection.template = "normal"
			newSelection.template = "selected"
			this.dates.setItem(data.index, newSelection)
			this.dates.setItem(this._selectedIndex, oldSelection)
			this._selectedIndex = data.index
		}
	}
}

export class CalendarListItem{
	_date: Date
	_template: string

	constructor(date: Date, template: string){
		this._date = date
		this._template = template
	}

	public get template(): string{
		return this._template
	}
	public set template(template: string){
		this._template = template
	}

	get date(): Date{
		return this._date
	}
	set date(date: Date){
		this._date = date
	}
}