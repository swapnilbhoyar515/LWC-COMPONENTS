import { LightningElement, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/dataTableClass.getAccountRecords';


 const columns=[
    {label:'Record Id',fieldName:'Id'},
    {label:'Account Name',fieldName:'Name'},
]


export default class DataTable extends LightningElement {
    columns =columns;
    data=[];
    error;
   
    @wire(getAccountRecords)

    getAccountFunction({data,error}){
      if(data){
             this.data = data;
      }
      else if(error){
       this.error=error;
      }
    }
}