import { Injectable } from '@angular/core';

import { Contact } from './contacts.model';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

@Injectable()
export class ContactsService {

	private contacts = new ObservableArray<Contact>(
		{ id: "0", name: "Peter Maffay", email: "peter.maffay@test.com", template: "default"},
		{ id: "1", name: "Markus Müller", email: "peter.maffay@test.com", template: "default" },
		{ id: "2", name: "Klaus Schmidt", email: "peter.maffay@test.com", template: "default" },
		{ id: "3", name: "Paul Panzer", email: "peter.maffay@test.com", template: "default" },
		{ id: "4", name: "Torsten Meier", email: "peter.maffay@test.com", template: "default" },
		{ id: "5", name: "Günther Jauch", email: "peter.maffay@test.com", template: "default" },
		{ id: "6", name: "Uwe Ludolf", email: "peter.maffay@test.com", template: "default" },
		{ id: "7", name: "Ernst Kaufmann", email: "peter.maffay@test.com", template: "default" },
		{ id: "8", name: "Johann Fröhlich", email: "peter.maffay@test.com", template: "default" },
		{ id: "9", name: "Martha Traurig", email: "peter.maffay@test.com", template: "default" },
		{ id: "10", name: "Werner Wunderlich", email: "peter.maffay@test.com", template: "default" },
		{ id: "11", name: "Jürgen Tieze", email: "peter.maffay@test.com", template: "default" },
		{ id: "12", name: "Chris Ernst", email: "peter.maffay@test.com", template: "default" },
		{ id: "13", name: "Mara Wagner", email: "peter.maffay@test.com", template: "default" },
		{ id: "14", name: "Timo Lobrecht", email: "peter.maffay@test.com", template: "default" },
		{ id: "15", name: "Tina Stürmer", email: "peter.maffay@test.com", template: "default" },
		{ id: "16", name: "Leo Dormhagen", email: "peter.maffay@test.com", template: "default" },
	)

	getContacts(): ObservableArray<Contact> {
        return this.contacts;
    }

    getContact(id: String): Contact {
        return this.contacts.filter(item => item.id === id)[0];
	}
	
	setContact(c: Contact){
		const idx = this.contacts.indexOf(this.getContact(c.id))
		this.contacts.getItem(idx).name = c.name
		this.contacts.getItem(idx).email = c.email
	}
}