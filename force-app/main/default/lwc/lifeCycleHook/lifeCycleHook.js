import { LightningElement } from 'lwc';

export default class LifeCycleHook extends LightningElement {
     message ='Welcome';
    constructor(){
        super();
        this.message = this.message + 'to component lifecycle';
        console.log('Executing Contructor');
    }

    connectedCallback(){
        console.log('Executing connected callback');
    }
    disconnectedCallback(){
        console.log('Executing disconnected callback');
    }
    renderedCallback(){
        console.log('Executing rendered call back');

    }

    /* errorCallback(error,stack){
        console.log('Executing error callback'+error);
    }*/
}