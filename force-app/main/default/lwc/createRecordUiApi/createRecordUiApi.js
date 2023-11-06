import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name'

export default class CreateRecordUiApi extends LightningElement {
    accountId;
    name='';

    handleChange(event){
            this.name = event.target.value;
            console.log('this.name:'+JSON.stringify(this.name))
    }

    handleClick(){

    }
}