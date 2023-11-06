import { LightningElement } from 'lwc';

export default class PaginationChild extends LightningElement {
    // onclick of previous sending info to parent component
    handlePrevious(event){
           this.dispatchEvent(new CustomEvent('previous'));
    }
    handleNext(event){
           this.dispatchEvent(new CustomEvent('next'));
    }
}