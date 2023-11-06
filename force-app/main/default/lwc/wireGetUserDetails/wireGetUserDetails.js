import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id'

export default class WireGetUserDetails extends LightningElement {
    userId = Id
   //0055h000008UIQ2AAO
    userDetails
    @wire(getRecord,{recordId:'0055h000008UIQ2AAO',fields:['User.Name','User.Email']})

    userDetailFunction({data,error}){
        if(data){
                this.userDetails = data.fields
        }
        else if(error){
                console.log('error'+error)
        }

    }
}