import { Component, OnInit } from '@angular/core';
import * as Platform from "platform";
import { RouterExtensions } from 'nativescript-angular/router';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
registerElement('CardView', () => CardView);

// Get the smallest screen width
const minSize = Math.min(Platform.screen.mainScreen.heightDIPs, Platform.screen.mainScreen.widthDIPs);


@Component({
	moduleId: module.id,
	selector: 'screen',
	templateUrl: (minSize < 600 ? "screen.component.html" : "screen.component.tablet.html"),
	styleUrls: ['./screen.component.css']
})

export class ScreenComponent implements OnInit {
	

	callback : Function
	entry: number = 0
	availabeSpace: number

	constructor(private routerExtensions: RouterExtensions, private page: Page) { 
	}

	ngOnInit() { 
		this.availabeSpace = Platform.screen.mainScreen.widthDIPs / 3
		this.callback=this.callbackFunction
	}

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.page.parent.parent;
        sideDrawer.showDrawer();
	}
	
	callbackFunction(event: number){
		
		if(minSize < 600){
			this.routerExtensions.navigate(["screenDetails", event])
		}
		else{
			this.entry = event
		}
	}


}
