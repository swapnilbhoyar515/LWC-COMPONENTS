import { LightningElement,api } from 'lwc';
import getContactDetails from '@salesforce/apex/showContacClass.getContactDetails';

const columns=[
    {label:'Id', fieldName:'Id'},
    {label:'FirstName',fieldName:'FirstName'},
    {label:'LastName',fieldName:'LastName'}
]

export default class ShowContactDetailsPage extends LightningElement {
    @api buttonLabel ='Show';
    contactData =[]; //this array will store conatcts details;

    columns=columns;

    @api recordId; // this property store the current account recordId;
    @api showDatatable = false;
    contactTempArray=[];

    handleShow(event){
        // If User clicks Show Button then datatable show visible and button becomes Hide
          if(event.target.label =="Show"){
            this.buttonLabel ="Hide";
            this.showDatatable = true;
          }
          // If user clicks Hide Button then datatable visible and button becomes Hide
          else if(event.target.label=="Hide"){
            this.buttonLabel ="Show";
            this.showDatatable = false;
          }
    }

    connectedCallback(){
        getContactDetails({recId:this.recordId})
        .then(res=>{

            let temp = tempRecords.map(row=>{
                return Object.assign({ContactName:row.contacts});
            })
            console.log("tempRecords:"+JSON.stringify(temp));

            // store contacts details in array

            temp.forEach(element =>{
                this.contactTempArray = element.ContactName;
                console.log("this.contactTempArray:"+JSON.stringify(this.contactTempArray));

            });


        })
        .catch(error=>{
            console.log("error"+JSON.stringify(error));
        })
    }

}