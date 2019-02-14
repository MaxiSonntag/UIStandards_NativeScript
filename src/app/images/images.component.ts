import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as imagepicker from "nativescript-imagepicker";

@Component({
	moduleId: module.id,
	selector: 'images',
	templateUrl: './images.component.html',
	styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {

	public image : any

	constructor(private page: Page) { }

	ngOnInit() {
		this.image = "~/sample_images/click_me.png"
	 }

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.page.parent.parent;
        sideDrawer.showDrawer();
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
		},
		(reason)=>{
			console.dir("Authorization failed for reason: "+reason)
			this._showPermissionDialog(reason as Error)
		}
		)
        .then((selection) => {
			console.log("Selection done: " + JSON.stringify(selection));
            //that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;

            // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
            /*selection.forEach(function (element) {
                element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
            });*/
			//console.log("Selection[0]: "+selection[0])
			if(selection != undefined){
				that.image = selection[0];
			}
            
        }).catch(function (e) {
            console.log(e);
        });
	}

	_showPermissionDialog(error: Error){
		let options={
			title: "Permission denied",
			message: "You need to grant permission to access images.",
			okButtonText: "Okay"
		}
		alert(options)
	}
}