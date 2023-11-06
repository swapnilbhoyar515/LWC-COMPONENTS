import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CreateRecordUI extends LightningElement {
    formFields={}
  
    handleChange(event){
    const {name,value} = event.target
    this.formFields[name]=value
    }
    handleClick(){
        const recordInput = {apiName:CONTACT_OBJECT.objectApiName, fields:this.formFields}
        createRecord(recordInput).then(result=>{
            this.showToast('Success','Contact Created with Id ${result.id}')
            this.template.querySelector('form.createForm').reset()
            this.formFields={}
        })
        .catch(error=>{
            this.showToast('Error Creating Record',error.body.message,'error')
        })
    }
      
        showToast(title,message,variant){
            this.dispatchEvent(new ShowToastEvent({
                title,
                message,
                variant:variant || 'success'
            }))
        }
}