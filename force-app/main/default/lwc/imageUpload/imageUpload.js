import { LightningElement, track,api } from 'lwc';
import fetchFiles from '@salesforce/apex/ImageUploadCtrl.fetchFiles';
export default class ImageUpload extends LightningElement {
    @api recordId;
    @track lstAllFiles;
    @track error;
    get acceptedFormats() {
        return ['.pdf','.png','.jpg'];
    }
 
    handleUploadFinished(event) {
        this.connectedCallback();
    }
 
    connectedCallback() {
        fetchFiles({recordId:this.recordId})
    .then(result=>{
        let files = [];
        result.forEach(file => {
            files.push({
                ContentDocument: {
                    Title: file.ContentDocument.Title,
                    FileType: file.ContentDocument.FileType,
                    ContentSize: file.ContentDocument.ContentSize
                }
            });
        });
        this.lstAllFiles = files; 
        this.error = undefined;
    }).catch(error=>{
        this.lstAllFiles = undefined; 
        this.error = error;
    })
    }
}