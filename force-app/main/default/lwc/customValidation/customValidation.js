import { LightningElement } from 'lwc';
import  ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CustomValidation extends LightningElement {
    objectApiName = ACCOUNT_OBJECT
    inputValue='';

    handleChange(event){
    this.inputValue = event.target.value;
    }

    handleSubmit(event){
          //event.preventDefault()
          const inputCmp = this.template.querySelector('lightning-input')
          const value = inputCmp.value
          if(value.includes('Test')){
            inputCmp.setCustomValidity('Account Name Cannot Be Test')
          }
          else{
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
          }

          inputCmp.reportValidity()
    }
    handleSuccess(event){
        const evt=    new ShowToastEvent({
                title : "Account Created",
                message : "Record Id"+event.detail.id,
                variant :"success"
            })
            this.dispatchEvent(evt)
    }
}