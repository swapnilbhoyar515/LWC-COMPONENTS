import { LightningElement,wire,api } from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import demoMessageChannel from '@salesforce/messageChannel/demoMessageChannel__c';

export default class ComponentALMS extends LightningElement {
     firstName;
     lastName;

    @wire(MessageContext)
    messageContext;

    handlefirstName(event){
        this.firstName = event.target.value;
    }
    handlelastName(event){
        this.lastName = event.target.value;
    }

    handleClick(){
        const messaage = {
            firstName: this.firstName,
            lastName: this.lastName
          };
        publish(this.messageContext, demoMessageChannel, messaage);  
    }

    
}