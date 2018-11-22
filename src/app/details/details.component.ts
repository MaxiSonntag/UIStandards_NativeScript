import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ContactsService } from '../contacts/shared/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contacts/shared/contacts.model';
import { RouterExtensions, PageRoute } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";



@Component({
	moduleId: module.id,
	selector: 'details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit, AfterViewInit, OnDestroy {

	private contact: Contact
	private image: any
	

	constructor(private contactService: ContactsService, private route: ActivatedRoute, private routerExtensions: RouterExtensions) {}

	ngOnInit() { 
		const id = this.route.snapshot.params["id"]
		this.contact = this.contactService.getContact(id)
		this.image = "~/sample_images/avatar.png"
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