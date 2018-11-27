import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
	moduleId: module.id,
	selector: 'tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {

	constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute, private page: Page) { }

	ngOnInit() {
	}

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.page.parent.parent;
        sideDrawer.showDrawer();
    }
}