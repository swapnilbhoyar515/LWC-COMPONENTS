

import { LightningElement, track, api } from 'lwc';
import convertToText from '@salesforce/apex/ImageUploader.convertToText';

export default class ImageBinary extends LightningElement {

    @track textString;

    handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const base64Data = reader.result.split(',')[1];
            convertToText({ fileName: file.name, base64Data })
                .then(result => {
                    this.textString = result;
                })
                .catch(error => {
                    console.error('Error converting image to text', error);
                });
        };
        reader.readAsDataURL(file);
    }

    showTextString() {
        alert(this.textString);
    }
}
