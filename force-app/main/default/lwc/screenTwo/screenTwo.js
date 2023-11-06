import { LightningElement,api,wire } from 'lwc';
import CALEAD from '@salesforce/schema/CA_Lead__c';
import SOURCE_INCOME from '@salesforce/schema/CA_Lead__c.Source_Of_Income__c';
import getRecords from '@salesforce/apex/CA_LEADCLASS.getRecords';
import YEARLY_INCOME from '@salesforce/schema/CA_Lead__c.Yearly_Income__c';



export default class ScreenTwo extends LightningElement {
    @api recordId;
    caLead = CALEAD;
    sourceOfIncome = SOURCE_INCOME;
    yearlyIncome = YEARLY_INCOME
    handleRequired = false;
    leadData;

    @wire(getRecords, { leadId :'$recordId'})
    wireFunction({data,error}){
           if(data){
                this.leadData = data;
               console.log('**data**'+JSON.stringify(this.leadData));
                  if(this.leadData.Occupation__c === 'Professional'){
                              this.handleRequired = true;
                             
                  }else{
                    this.handleRequired = false;
                  }
             
                
           }
           else if(error){
                   console.log('**error**'+error);
           }
    }

    // checkLeadName() {
    //     if (this.leadData && this.leadData.Occupation__c) {
    //         if (this.leadData.Occupation__c === 'Professional') {
    //                   this.handleRequired = true;
    //             console.log('The lead name is John');
    //         } else {
    //             console.log('The lead name is not John');
    //         }
    //     }
    // }
}