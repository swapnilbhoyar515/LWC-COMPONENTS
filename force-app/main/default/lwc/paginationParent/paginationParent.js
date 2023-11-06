import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/PaginationClass.getAccounts';

const columns=[
    {label:'Id',fieldName:'Id'},
    {label:'Account Name',fieldName:'Name'}
]

export default class PaginationParent extends LightningElement {
   columns=columns;
   data;
   items;
   startingRecord = 1;
   page = 1;
   endingRecord = 0;
   totalRecordCount;
   totalPage;
   pageSize = 5;

   @wire(getAccounts)
   wireFunction(result){
     if(result.data){
        // items stores all records
        this.items = result.data;
        // total records count
        this.totalRecordCount = result.data.length;
        // total page count from Math.cell  which counts next Largest integer example : Math.cell(7.04) = 8 is next largest
        this.totalPage = Math.ceil(this.totalRecordCount/this.pageSize);
        //slice method takes 2 params (including 0 and exclusive pageSize)
        this.data = this.items.slice(0,this.pageSize);
        this.endingRecord = this.pageSize;

     }
   }
   
   // onclick of previous  this method gets called
   prevHandler(event){
          if(this.page > 1){
            this.page = this.page - 1;
            this.displayRecordPerPage(this.page);
          }
   }
   // onclick of next this method gets called
   nextHandler(event){
        if(this.page <this.totalPage && this.page !==this.totalPage){
            this.page = this.page + 1;
            this.displayRecordPerPage(this.page);
        }
   }
   displayRecordPerPage(page){
    this.startingRecord = (page - 1)*this.pageSize;
    this.endingRecord = page * this.pageSize;
    this.endingRecord = (this.endingRecord > this.totalRecordCount)?this.totalRecordCount:this.endingRecord;
    this.data = this.items.slice(this.startingRecord,this.endingRecord);
    this.startingRecord = this.startingRecord +1;
   }
}