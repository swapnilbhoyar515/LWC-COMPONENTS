
    import { LightningElement, track } from 'lwc';
    import convertImageToBase64 from '@salesforce/apex/ImageUploadController.convertImageToBase64';

    export default class ImageUploadCompo extends LightningElement {
        @track imageData;
        @track imageUrl;

        handleUploadFinished(event) {
            const uploadedFiles = event.detail.files;
            if (uploadedFiles.length > 0) {
                const file = uploadedFiles[0];
                const reader = new FileReader();
                reader.onload = () => {
                    const fileContents = reader.result;
                    convertImageToBase64({ fileContent: fileContents })
                        .then((result) => {
                            this.imageData = result;
                            this.imageUrl = "data:image/jpeg;base64," + result;
                        })
                        .catch((error) => {
                            console.log('Error:', error);
                        });
                };
                reader.readAsDataURL(file);
            }
        }
    }
