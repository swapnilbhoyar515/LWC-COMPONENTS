import { LightningElement } from 'lwc';

export default class ParentHook extends LightningElement {

    displayChild= false;
    constructor(){
        super();
           console.log('contructor from parent');
    }

    connectedCallback(){
        console.log('connectedCallback from parent');
    }

    renderedCallback(){
        console.log('renderedCallback from parent');
    }

    handleChange(event){
        this.displayChild = event.target.checked;
    }
    errorCallback(error,stack){
        console.log('errorCallback from parent');
        console.log('error', error.message);
        console.log('error', stack);
    }

    disconnectedCallback(){
        console.log('disconnectedCallback from parent');
    }
}