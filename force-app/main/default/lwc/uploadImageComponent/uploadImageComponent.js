import { LightningElement,api,track } from 'lwc';
import fetchFiles from '@salesforce/apex/AccountControllerClass.fetchFiles';
export default class UploadImageComponent extends LightningElement {

    @api recordId;
    @track lstAllFiles;
    @track error;

    get acceptedFormats() {
        return ['.pdf','.png','.jpg'];
    }

    connectedCallback() {
        fetchFiles({recordId:this.recordId})
        .then(result=>{
            this.lstAllFiles = result; 
            this.error = undefined;
        }).catch(error=>{
            this.lstAllFiles = undefined; 
            this.error = error;
        })
    }

    handleUploadFinished(event) {
        this.connectedCallback();
    }
}