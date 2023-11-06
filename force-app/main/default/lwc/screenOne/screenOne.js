import { LightningElement,api } from 'lwc';
import CALEAD from '@salesforce/schema/CA_Lead__c';
import OCCUPATION from '@salesforce/schema/CA_Lead__c.Occupation__c';
import PEP from '@salesforce/schema/CA_Lead__c.PEP__c';



export default class ScreenOne extends LightningElement {
    @api recordId;
    caLead = CALEAD;
    occupation = OCCUPATION;
    isPEP = PEP;

    isVisible;
    isShow = false;

    handlePepChange(event){
              this.isVisible = event.target.value;
             if(this.isVisible == 'Yes'){
                           this.isShow = true;
             }else{
                          this.isShow = false;
             }
    }
}