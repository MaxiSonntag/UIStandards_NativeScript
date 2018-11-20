import { Component, OnInit } from '@angular/core';

import { Contact } from './shared/contacts.model';
import { ContactsService } from './shared/contacts.service';

import { PlatformLocation } from '@angular/common'

import { LocalNotifications } from "nativescript-local-notifications";
import * as Dialogs from "ui/dialogs"
import { Console } from '@angular/core/src/console';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { ListViewEventData } from 'nativescript-ui-listview';
import { View, layout, Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	moduleId: module.id,
	selector: 'contacts',
	styleUrls: ['contacts.component.css'],
	templateUrl: 'contacts.component.html',
})

export class ContactsComponent implements OnInit {
	contacts: ObservableArray<Contact> = new ObservableArray<Contact>();
	_templateSelector: (item: Contact, index: number, items: any) => string;
	subscription: Subscription

	rightThresholdPassed: Boolean

	constructor(private contactsService: ContactsService, private location: PlatformLocation, private routerExtensions: RouterExtensions, private route: ActivatedRoute) {
		/*this.subscription = this.routerExtensions.router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				console.log("NavigationEnd")
			  if (this.routerExtensions.router.url == "/contacts") {
				const sideDrawer = <RadSideDrawer>app.getRootView();
				sideDrawer.gesturesEnabled = true
				console.log("navigation end");
				this.subscription.unsubscribe();
			  }
			}
		  });*/
	}

	ngOnInit() {
		
		this._setupListItems();
		this._templateSelector = this.templateSelectorFunction;

		LocalNotifications.addOnMessageReceivedCallback(notificationData => {
			Dialogs.alert({
				title: "Notification received",
				message: "ID: " + notificationData.id +
					"\nTitle: " + notificationData.title +
					"\nBody: " + notificationData.body,
				okButtonText: "Excellent!"
			});
		}
		);
	}

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

	_setupListItems(){
		this.contacts = this.contactsService.getContacts();

		/*for(let idx = 0; idx < 2000; idx++){
			this.contacts.push({id: "", name: "Test name", email: "test mail", template: "default"});
		}*/

		var resArray: ObservableArray<Contact> = new ObservableArray<Contact>();
		var nr = 0;

		for (let index = 0; index < this.contacts.length; index++) {
			if(index%4==0){
				resArray.push({id: "", name: "Heading "+nr, email: "", template: "section"});
				nr++;
			}
			resArray.push(this.contacts.getItem(index));
		}
		this.contacts = resArray;
	}


	itemTap(event: ListViewEventData){
		if(this.contacts.getItem(event.index).template == "default"){
			console.log("ITEM TAP: "+event.index)
			this.routerExtensions.router.navigate(["details", this.contacts.getItem(event.index).id]);
		}
	}

	get templateSelector(): (item: Contact, index: number, items: any) => string {
        return this._templateSelector;
    }

    set templateSelector(value: (item: Contact, index: number, items: any) => string) {
        this._templateSelector = value;
    }

    public templateSelectorFunction = (item: Contact, index: number, items: any) => {
        return item.template;
	}
	
	//"tap to execute"
	/*onSwipeCellStarted(args: ListViewEventData) {
		const swipeLimits = args.data.swipeLimits;
		const swipeView = args['object'];
		const leftItem = swipeView.getViewById<View>('mark-view');
		const rightItem = swipeView.getViewById<View>('delete-view');
		swipeLimits.left = leftItem.getMeasuredWidth();
		swipeLimits.right = rightItem.getMeasuredWidth();
		swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
	}*/

	// swipe to execute 
	onSwipeCellStarted(args: ListViewEventData) {
		console.log("SWIPE CELL STARTED");
		const swipeLimits = args.data.swipeLimits;
		const swipeView = args['object'];
		if(this.contacts.getItem(args.index).template === "section"){
			console.log("SWIPE ITEM IS SECTION");
			swipeLimits.left = swipeLimits.right = 0;
			swipeLimits.threshold = swipeView.getMeasuredWidth();
		}
		else{
			console.log("SWIPE ITEM IS DEFAULT");
			const leftItem = swipeView.getViewById('mark-view');
			const rightItem = swipeView.getViewById('delete-view');
			swipeLimits.right = args.data.x > 0 ? swipeView.getMeasuredWidth() / 2 : swipeView.getMeasuredWidth() / 2;
			swipeLimits.left = 0;
			swipeLimits.threshold = swipeView.getMeasuredWidth();
		}
		
	}

	onCellSwiping(args: ListViewEventData) {
		const swipeLimits = args.data.swipeLimits;
		const swipeView = args['swipeView'];
		const mainView = args['mainView'];
		const rightItem = swipeView.getViewById('delete-view');
	
		if (args.data.x <= -swipeView.getMeasuredWidth() / 2 && !this.rightThresholdPassed) {
			const deleteLabel = rightItem.getViewById('delete-text');
			console.log("Notify perform right action");
			this.rightThresholdPassed = true;
		}
		if (args.data.x <= 0) {
			const rightDimensions = View.measureChild(
				rightItem.parent,
				rightItem,
				layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
				layout.makeMeasureSpec(mainView.getMeasuredHeight(), layout.EXACTLY));
	
			View.layoutChild(rightItem.parent, rightItem, mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0, mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
		}
	}

	onSwipeCellFinished(args: ListViewEventData) {
		const swipeView = args['object'];
		const leftItem = swipeView.getViewById('mark-view');
		const rightItem = swipeView.getViewById('delete-view');
		if (this.rightThresholdPassed) {
			console.log("Perform right action");
			this.contacts.splice(args.index, 1);
		}
		this.rightThresholdPassed = false;
	}

	schedule() {
        LocalNotifications.requestPermission().then(granted => {
            if(granted) {
                LocalNotifications.schedule([{
                    id: 1234,
                    title: "Test notification",
                    body: "You just received a local notification",
                    at: new Date(new Date().getTime() + (10 * 1000))
                }]).then(() => {
                    console.log("Notification received!");
                }, error => {
                    console.dir(error);
                });
            }
        });
    }

}