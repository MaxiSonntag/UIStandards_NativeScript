import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts/shared/contacts.service';
import { Contact } from '../contacts/shared/contacts.model';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
	moduleId: module.id,
	selector: 'edit',
	templateUrl: './edit.component.xml',
	styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit, AfterViewInit {

	constructor(private contactService: ContactsService, private route: ActivatedRoute, private routerExtensions: RouterExtensions) { }

	private originalContact: Contact
	private contact: Contact

	ngOnInit() { 
		const id = this.route.snapshot.params["id"];
		this.originalContact = this.contactService.getContact(id);
		this.contact = {id: this.originalContact.id, name: this.originalContact.name, email: this.originalContact.email, template: this.originalContact.template}
	}

	ngAfterViewInit(): void {
		//const sideDrawer = <RadSideDrawer>app.getRootView();
		//sideDrawer.gesturesEnabled = false
	}

	backPressed(){
		this.routerExtensions.backToPreviousPage()
	}

	savePressed(){
		this.contactService.setContact(this.contact);
		this.routerExtensions.backToPreviousPage();
	}
}