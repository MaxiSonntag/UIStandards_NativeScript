import { Injectable } from '@angular/core';

import { Images } from './images.model';

@Injectable()
export class ImagesService {

	private images: Array<Images>

	constructor(){
		this.images = new Array<Images>();
		for (let index = 0; index < 26; index++) {
			const element = new Images()
			element.path = "~/sample_images/DSC_"+index+".jpg";
			this.images.push(element);
		}
	}

	getContacts(): Images[] {
        return this.images;
    }

}