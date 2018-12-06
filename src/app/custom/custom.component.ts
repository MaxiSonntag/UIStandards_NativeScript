import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
	moduleId: module.id,
	selector: 'custom',
	templateUrl: './custom.component.html',
	styleUrls: ['./custom.component.css']
})

export class CustomComponent implements OnInit {

	
	constructor(private page: Page) { }

	ngOnInit() {
	}

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.page.parent.parent;
        sideDrawer.showDrawer();
	}

	goback(){}
}