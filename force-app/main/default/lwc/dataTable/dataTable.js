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



    connectedCallback(){
      console.log('connected Call back');
    }

   
    @wire(getAccountRecords)
    getAccountFunction({data,error}){
      console.log('wire');
      if(data){
             this.data = data;
             console.log('wire 1');
      }
      else if(error){
       this.error=error;
      }
    }

    
    
}