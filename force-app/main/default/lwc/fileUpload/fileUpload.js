import { LightningElement, track } from 'lwc';

import convertFileToBase64 from '@salesforce/apex/FileUploadController.convertToBase64';

export default class FileUpload extends LightningElement {

    @track base64Data;

    handleFileChange(event) {

        const file = event.target.files[0];

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {

            this.fileContent = reader.result.split(',')[1];

        };

    }

    convertToBase64() {

        if (this.fileContent) {

            convertFileToBase64({fileContent: this.fileContent})

                .then(result => {

                    this.base64Data = result;

                })

                .catch(error => {

                    console.error(error);

                });

        }

    }

}
