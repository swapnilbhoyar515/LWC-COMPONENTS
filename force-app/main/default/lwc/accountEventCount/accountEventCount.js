import { LightningElement,api,wire } from 'lwc';
import getAccountEventsCount from '@salesforce/apex/AccountControllerClass.getAccountEventsCount';

export default class AccountEventCount extends LightningElement {
    @api recordId;
    eventsCount;

    @wire(getAccountEventsCount, { accountId: '$recordId' })
    wiredEventsCount({ error, data }) {
        if (data) {
            this.eventsCount = data;
        } else if (error) {
            console.error(error);
        }
    }
}