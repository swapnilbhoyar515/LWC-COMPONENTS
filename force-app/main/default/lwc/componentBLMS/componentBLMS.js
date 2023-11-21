import { LightningElement,wire } from 'lwc';
import { subscribe,unsubscribe, MessageContext } from 'lightning/messageService';
import demoMessageChannel from '@salesforce/messageChannel/demoMessageChannel__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ComponentBLMS extends LightningElement {

    myfirstName = '';
    mylastName  = '';


    subscription = null;
    @wire(MessageContext)
    messageContext;

    connectedCallback() {

        this.handleSubscribe();
    }

    handleSubscribe() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.messageContext, demoMessageChannel, (message) => {
        this.myfirstName = message.firstName;
        this.mylastName = message.lastName;
        this.ShowToast('Success', 'Data Transfer Successfully', 'success', 'dismissable');
        });
    }

    disconnectedCallback() {
        unsubscribe(this.subscription);
    }
    ShowToast(title, message, variant, mode){
        const evt = new ShowToastEvent({
            title: title,
            message:message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(evt);
    }

}