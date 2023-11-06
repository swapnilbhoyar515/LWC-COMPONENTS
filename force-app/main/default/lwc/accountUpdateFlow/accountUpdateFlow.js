import { api, LightningElement } from 'lwc';
import {FlowNavigationNextEvent} from 'lightning/flowSupport';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountUpdateFlow extends LightningElement {
    @api 
    availableActions = [];
    @api
    accountRecordId;
    objectApiName = 'Account';
    fields = ['Name','Type','Industry'];
    handleSuccess(event){
        const evt = new ShowToastEvent({
            title :"Record Update",
            message:"Account Record Updated Successfully",
            variant:"success"
        });
        this.dispatchEvent(evt);
        this.handleGoNext();
    }

    handleGoNext(){
        //check if NEXT is allowed on this screen
        if(this.availableActions.find(action => action === 'NEXT')){
            // navigate to the next screen
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }
}