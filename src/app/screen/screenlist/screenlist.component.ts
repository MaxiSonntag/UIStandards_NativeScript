import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
	moduleId: module.id,
	selector: 'screenlist',
	templateUrl: './screenlist.component.html',
	styleUrls: ['./screenlist.component.css']
})

export class ScreenListComponent implements OnInit {

	@Input() callback : ((n: number)=>any)
	@Output() onClicked: EventEmitter<number> = new EventEmitter()
	@Input() shouldShowSelection: boolean
	selectedIdx : number

	items: Array<string> = Array()

	constructor(private page: Page) { 
	}

	ngOnInit() {
		for (let index = 0; index < 25; index++) {
			this.items.push("List entry "+index);
		}
		if(this.shouldShowSelection){
			this.selectedIdx = 0
		}
	}

	itemTapped(args){
		if(this.shouldShowSelection){
			this.selectedIdx = args.index
		}
		this.onClicked.emit(args.index)
	}
}