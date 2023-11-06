import { LightningElement, wire } from 'lwc';
import  getContactRecords from '@salesforce/apex/dataTableClass.getContactRecords';

const columns=[
    {label:'Record Id',fieldName:'Id'},
    {label:'Contact Name',fieldName:'Name'},
]

export default class DataTableSearch extends LightningElement {
    columns=columns;
    data = [];
    searchKey = '';
    error;

    handleChange(event){
        this.searchKey = event.target.value;
    }

    @wire(getContactRecords,{contactName:'$searchKey'})
    
    getContactFunction({data,error}){
        if(data){
              this.data = data;
        }
        else if(error){
                 this.error = error;
        }
    }
}