import { LightningElement } from 'lwc';
import Tesseract from 'tesseract.js';

export default class ImageToText extends LightningElement {
    imageSrc;
    extractedText;

    handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            this.imageSrc = e.target.result;
            this.performOCR();
        };
        reader.readAsDataURL(file);
    }

    async performOCR() {
        const { data: { text } } = await Tesseract.recognize(this.imageSrc);
        this.extractedText = text;
    }
}