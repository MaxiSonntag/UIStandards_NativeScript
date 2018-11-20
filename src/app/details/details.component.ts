import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ContactsService } from '../contacts/shared/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contacts/shared/contacts.model';
import { RouterExtensions, PageRoute } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import * as imagepicker from "nativescript-imagepicker";


@Component({
	moduleId: module.id,
	selector: 'details',
	templateUrl: './details.component.xml',
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

	imageTapped(){
		console.log("Starting Image Selection")
		let that = this;

		let context = imagepicker.create({
            mode: "single"
		});
		context
        .authorize()
        .then(() => {
            that.image = [];
            return context.present();
        })
        .then((selection) => {
			console.log("Selection done: " + JSON.stringify(selection));
            //that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;

            // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
            /*selection.forEach(function (element) {
                element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
            });*/
			//console.log("Selection[0]: "+selection[0])
            that.image = selection[0];
        }).catch(function (e) {
            console.log(e);
        });
	}

	onBackPressed(){
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.gesturesEnabled = true
		this.routerExtensions.backToPreviousPage()
	}

}