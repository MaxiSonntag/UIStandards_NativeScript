import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'screendetailspage',
	templateUrl: './screendetailspage.component.html',
	styleUrls: ['./screendetailspage.component.css']
})

export class ScreenDetailsPageComponent implements OnInit {

	entry : number

	constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions) { }

	ngOnInit() {
		this.entry = this.route.snapshot.params["id"]

	}

	ngAfterViewInit(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.gesturesEnabled = false
	}

	ngOnDestroy(){
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.gesturesEnabled = true
	}

	

	onBackPressed(){
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.gesturesEnabled = true
		this.routerExtensions.backToPreviousPage()
	}
}