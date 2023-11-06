import { LightningElement ,track} from 'lwc';
import getAccountRecordsShowButton from '@salesforce/apex/dataTableClass.getAccountRecordsShowButton';

const columns =[
  {label:'Id',fieldName:'Id'},
  {label:'Account Name',fieldName:'Name'}
]

export default class ButtonDataTable extends LightningElement {
    columns = columns;
   @track record;
   @track maxRecords=5;
    error;


    connectedCallback(){
        this.getData();
    }

    getData(){
    getAccountRecordsShowButton()
    .then(data=>{
           this.record = data;
    })
    .catch(error=>{
           this.error = error;
    })
}

handleClick(){
       this.maxRecords = this.length.record;
}

    
    

    

}