import { LightningElement,api } from 'lwc';
import CALEAD_OBJECT from '@salesforce/schema/CA_Lead__c';
import OCCUPATION_FIELD from '@salesforce/schema/CA_Lead__c.Occupation__c';
import SOURCE_INCOME from '@salesforce/schema/CA_Lead__c.Source_Of_Income__c'
import YEARLY_INCOME from '@salesforce/schema/CA_Lead__c.Yearly_Income__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class CaPERSONAL extends LightningElement {
    @api recordId;
    caLeadObject = CALEAD_OBJECT;
    occupationField = OCCUPATION_FIELD;
    sourceOfIncome = SOURCE_INCOME;
    yearlyIncome = YEARLY_INCOME;


    isPep = 'No' ;
    isPEP = false;
    handlePEPChange(event){
        this.isPep = event.detail.value;
          if(this.isPep === 'Yes'){
                   this.isPEP = true;
                  // this.isSave = false;
          }
          else {
            this.isPEP = false;
           // this.isSave = true;
          }
        }

        get pepOptions(){
          return [
              { label: 'Yes', value: 'Yes' },
              { label: 'No', value: 'No' }
          ];
      }

      handleSuccess(event){
        const evt = new ShowToastEvent({
         title:"Record Creation",
         message:"Record Created Successfully",
         variant:"success"
 
        })
        this.dispatchEvent(evt);
     }
}