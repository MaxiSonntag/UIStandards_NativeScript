import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { WebView, LoadEventData } from 'tns-core-modules/ui/web-view'
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator'

@Component({
	moduleId: module.id,
	selector: 'WebComponent',
	templateUrl: './web.component.html',
	styleUrls: ['./web.component.css']
})

export class WebComponent implements OnInit, AfterViewInit {

	@ViewChild("webView") webViewRef: ElementRef
	@ViewChild("loadingIndicator") indicatorRef: ElementRef
	isLoading = true
	webViewVisibility = "collapse"

	constructor(private page: Page) { }

	ngOnInit() { 
		
	}

	ngAfterViewInit(){
		let webView: WebView = this.webViewRef.nativeElement
		webView.on(WebView.loadFinishedEvent, (data: LoadEventData)=>{
			console.dir("LOADING FINISHED")
			webView.visibility = "visible"
			let indicator: ActivityIndicator = this.indicatorRef.nativeElement
			indicator.busy = false
			indicator.visibility = "collapse"
			
		})
	}

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.page.parent.parent;
        sideDrawer.showDrawer();
	}
	
}