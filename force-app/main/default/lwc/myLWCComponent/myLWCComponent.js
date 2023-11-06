import { LightningElement, api } from 'lwc';
import GetTextFromImage from '@salesforce/apex/ImageServiceController.GetTextFromImage';

export default class MyLWCComponent extends LightningElement {
    @api recordId;
    status;

    connectedCallback() {
        this.extractImage();
    }

    extractImage() {
        GetTextFromImage({ recordId: this.recordId })
            .then(result => {
                this.status = 'Text extracted from image. Check file record detail section';
            })
            .catch(error => {
                this.status = 'Error message: ' + error.body.message;
            });
    }
}
