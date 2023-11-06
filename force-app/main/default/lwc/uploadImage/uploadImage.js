import { LightningElement } from 'lwc';

export default class UploadImage extends LightningElement {
    imageFile;
    text;

    handleImageUpload(event) {
        this.imageFile = event.target.files[0];
    }

    handleShowText() {
        if (this.imageFile) {
            // Create a new FileReader object to read the image file
            const reader = new FileReader();

            // When the FileReader object has finished loading the image file
            reader.onload = () => {
                // Create a new Tesseract.js worker to recognize the text in the image
                const worker = new Tesseract.createWorker();
                worker.load().then(() => {
                    worker.recognize(reader.result).then(({ data }) => {
                        this.text = data.text;
                    });
                });
            };

            // Read the image file
            reader.readAsDataURL(this.imageFile);
        } else {
            this.text = undefined;
        }
    }
}
