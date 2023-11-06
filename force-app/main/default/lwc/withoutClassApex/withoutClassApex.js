import { LightningElement,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getListUi } from 'lightning/uiListApi';


const FIELDS = ['Account.Id'];
const OBJECT_NAME = 'Event';
const RELATIONSHIP_FIELD_NAME = 'AccountId';


export default class WithoutClassApex extends LightningElement {
    


@wire(getRecord, { recordId: '$recordId', fields: FIELDS })
account;
@wire(getListUi, { objectApiName: OBJECT_NAME, listViewApiName: 'Recent', filters: [ {field: RELATIONSHIP_FIELD_NAME, value: '$account.data.fields.Id.value'} ]})
events;

}