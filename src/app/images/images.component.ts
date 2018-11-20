import { Component, OnInit } from '@angular/core';

import { Images } from './shared/images.model';
import { ImagesService } from './shared/images.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
	moduleId: module.id,
	selector: 'images',
	templateUrl: 'images.component.html',
	styleUrls: ['images.component.css'],
	providers: [ImagesService]
})

export class ImagesComponent implements OnInit {
	images: Images[] = [];
	columns: number = 0

	constructor(private imagesService: ImagesService, private routerExtensions: RouterExtensions, private page: Page) { }

	ngOnInit() {
		this.images = this.imagesService.getContacts();
	}

	ngAfterViewInit(): void {
		//const sideDrawer = <RadSideDrawer>app.getRootView();
		//sideDrawer.gesturesEnabled = false
	}

	onOpenCharts(){
		this.routerExtensions.navigate(["charts"])
	}

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.page.parent.parent;
        sideDrawer.showDrawer();
    }
}