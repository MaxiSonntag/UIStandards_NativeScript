import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { setInterval } from "tns-core-modules/timer";

@Component({
	moduleId: module.id,
	selector: 'themes',
	templateUrl: './themes.component.html',
	styleUrls: ['./themes.component.css']
})

export class ThemesComponent implements OnInit {

	public id
	public value = 0
	public items = [
		{title: "List item 1 title", sub: "List item 1 subtitle", img: "~/sample_images/DSC_0.jpg"},
		{title: "List item 2 title", sub: "List item 2 subtitle", img: "~/sample_images/DSC_1.jpg"},
		{title: "List item 3 title", sub: "List item 3 subtitle", img: "~/sample_images/DSC_2.jpg"},
		{title: "List item 4 title", sub: "List item 4 subtitle", img: "~/sample_images/DSC_3.jpg"},
		{title: "List item 5 title", sub: "List item 5 subtitle", img: "~/sample_images/DSC_4.jpg"}
	]

	constructor(private page: Page) { }

	ngOnInit() {
		this.id = setInterval(()=>{
			if(this.value < 100){
				this.value += 1
			}
			else{
				this.value = 0
			}
		}, 200)
	 }

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.page.parent.parent;
        sideDrawer.showDrawer();
    }
}