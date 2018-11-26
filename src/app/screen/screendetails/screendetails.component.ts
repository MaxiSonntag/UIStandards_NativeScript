import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'screendetails',
	templateUrl: './screendetails.component.html',
	styleUrls: ['./screendetails.component.css']
})

export class ScreenDetailsComponent implements OnInit {

	@Input() entry: number

	constructor() { }

	ngOnInit() {
	 }
}