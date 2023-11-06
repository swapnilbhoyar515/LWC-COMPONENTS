import { LightningElement,wire,api } from 'lwc';
import getAccountEvents from '@salesforce/apex/AccountEventsClass.getAccountEvents';


export default class AccountRelatedEvents extends LightningElement {
    @api recordId;

    @wire(getAccountEvents, {accountId: '$recordId'})
    events;
}
