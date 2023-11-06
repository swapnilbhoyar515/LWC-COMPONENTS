import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/ComboBox.getAccounts';
import getContacts from '@salesforce/apex/ComboBox.getContacts';

export default class TwoComboBoxAccountContacts extends LightningElement {
    acValue='';
    accOpt=[];
    ctValue='';
    ctOpt=[];

    get acOptions(){
           return this.accOpt;
    }
    get ctOptions(){
        return this.ctOpt;
    }
    handleContact(event){
             this.ctValue = event.detail.value;
    }
   

    connectedCallback(){
        getAccounts()
        .then(data=>{
            let arr=[];
            for(var i=0;i<data.length;i++){
                arr.push({label:data[i].Name,value:data[i].Id})
            }
            this.accOpt=arr;

        })
        
    }
    handleAccount(event){
        this.acValue = event.detail.value;

        getContacts({accId : this.acValue})
        .then(data=>{
         let arr1=[];
         for( var i=0;i<data.length;i++){
             arr1.push({label:data[i].Name,value:data[i].Email});
         }
         this.ctOpt = arr1;
        // this.ctOpt=[];
        }) 

 }
}