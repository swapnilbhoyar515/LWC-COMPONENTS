import { LightningElement } from 'lwc';

export default class P2cParentSlider extends LightningElement {
    handleClick(){
        this.template.querySelector('c-p2c-slider-component').resetSlider();
        console.log('abddf');
    }
}