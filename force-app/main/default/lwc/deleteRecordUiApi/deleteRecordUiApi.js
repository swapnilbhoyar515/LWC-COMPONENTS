import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class DeleteRecordUiApi extends LightningElement {
    c = 'ghvhjhjjj';
    nameValue;
    
    recordId
    changeHandler(event){
          this.recordId = event.target.value
    }
    deleteHandler(){
            deleteRecord(this.recordId)
            .then((result)=>{
                console.log("Deleted Successfully")
            })
            .catch(error=>{
                console.log(error)
            })
             
            const evt = new ShowToastEvent({
                title :"Record Delete",
                message : "Record Deleted Successfully",
                variant :"success"
            })
            this.dispatchEvent(evt)
    }

 
}