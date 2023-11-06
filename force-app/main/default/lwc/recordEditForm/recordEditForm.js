import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_RATING from '@salesforce/schema/Account.Rating';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class RecordEditForm extends LightningElement {
    ObjectApi = ACCOUNT_OBJECT;
    Name = ACCOUNT_NAME;
    Rating = ACCOUNT_RATING;
    Industry = ACCOUNT_INDUSTRY;
    

            handleSuccess(event){
                const evt = new ShowToastEvent({
                    title : "Record Created",
                    message :"Record Created Successfully    "  + event.detail.id,
                    variant : "success"
                })
                this.dispatchEvent(evt);
            }
}