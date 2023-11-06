import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/ComboBox.getAccounts';
import getContacts from '@salesforce/apex/ComboBox.getContacts';

const columns=[
    {label:'Record Id',fieldName :'Id'},
    {label:'Contact Name', fieldName:'Name'}
]

export default class ComboBoxAccountContactDataTable extends LightningElement {
    columns=columns;
    acOptions=[];
    value='';
    isVisible = false;
    data=[];

    get options(){
        return this.acOptions;
    }

    handleChange(event){
            this.isVisible = true;
           this.value = event.detail.value;
     
           getContacts({accId : this.value})
           .then(data=>{
            this.data = data;
           })
           .catch(error=>{
            console.log('Error'+JSON.stringify(error))
           })

    }

    connectedCallback(){
        getAccounts()
        .then(data =>{
            let arr=[];
            for(var i=0;i<data.length;i++){
                arr.push({label : data[i].Name,value: data[i].Id})
            }
            this.acOptions = arr;
        })
    }
}