import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Time } from '@angular/common';
import { DataFormEventData, RadDataForm } from 'nativescript-ui-dataform';
import { knownFolders } from 'tns-core-modules/file-system/file-system';
import { Page, Color } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import {isIOS, isAndroid} from "platform";
import { DatePicker } from 'tns-core-modules/ui/date-picker/date-picker';
import { Label } from "ui/label"

@Component({
	moduleId: module.id,
	selector: 'inputs',
	templateUrl: './inputs.component.html',
	styleUrls: ['./inputs.component.css']
})

export class InputsComponent implements OnInit{

	private _inputTest: InputTest
	metadata : any
	resultText: string

	constructor(private page: Page) { }

	ngOnInit() { 
		this._inputTest = new InputTest();
		this._readSettingsFromJson();
		this._setResultText(TextStyles.Neutral)
	}

	get inputTest(){
		return this._inputTest
	}

	onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.page.parent.parent;
        sideDrawer.showDrawer();
    }


	async _readSettingsFromJson(){
		const appFolder = knownFolders.currentApp()
		const dataFolder = appFolder.getFolder("sample_data")
		const jsonFile = dataFolder.getFile("dataform_settings.json")
		const json = await jsonFile.readText()
		
		this.metadata = JSON.parse(json)
	}

	_setResultText(type: TextStyles){
		const label = <Label>this.page.getViewById("resultText")
		switch (type) {
			case TextStyles.Success:
				label.text="Everything alright!"
				label.color = new Color("#008000")
				break;
			case TextStyles.Failure:
				label.text="Validation failed."
				label.color = new Color("#ff0000")
				break
			default:
				label.text="Not validated yet"
				label.color = new Color("#000000")
				break;
		}
		
	}

	validateForm(){
		const form = <RadDataForm>this.page.getViewById("dataForm")
		form.validateAndCommitAll().then((result)=>{result?this._setResultText(TextStyles.Success):this._setResultText(TextStyles.Failure)})
	}

	resetForm(){
		this._inputTest = new InputTest();
		const form = <RadDataForm>this.page.getViewById("dataForm")
		form.commitAll()
		this._setResultText(TextStyles.Neutral)
	}

}

export class InputTest{
	text: string
	email: string
	phone: number
	date: Date
	time: Time

	constructor(text: string = "", email: string = "", phone: number = null, date: Date = null, time: Time = null){
		this.text = text
		this.email = email
		this.phone = phone
		this.date = date
		this.time = time
	}
}

export enum TextStyles{
	Neutral,
	Success,
	Failure
}