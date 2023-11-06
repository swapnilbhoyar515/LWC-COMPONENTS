import { LightningElement,api } from 'lwc';

export default class GetContactsRecordsFromFlow extends LightningElement {
    @api records=[];
    @api fieldColumn =[
        {label:'First Name',fieldName:'FirstName'},
        {label:'Last Name',fieldName:'LastName'},
        {label:'Email',fieldName:'Email'}
        
    ];
}