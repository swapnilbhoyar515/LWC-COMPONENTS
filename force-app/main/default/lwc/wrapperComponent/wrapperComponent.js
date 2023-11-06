import { LightningElement,api,wire } from 'lwc';
import getAllAccountWithContact from '@salesforce/apex/WrapperClass.getAllAccountWithContact';

export default class WrapperComponent extends LightningElement {
    @api accountsWithContact;
    @api error;
    @wire(getAllAccountWithContact)
    WiredAccountsWithContacts({error, data}){
        
        if(data){
            console.log('data==>'+JSON.stringify(data));
            this.accountsWithContact = data;
        }
        else if(error){
            console.log(error);
            this.error = error;
 
        }
    }
}