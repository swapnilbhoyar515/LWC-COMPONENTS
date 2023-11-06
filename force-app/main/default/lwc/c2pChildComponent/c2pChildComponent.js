import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {
    handleClick(){
        const myEvent = new CustomEvent('save')
        this.dispatchEvent(myEvent)
    }
}