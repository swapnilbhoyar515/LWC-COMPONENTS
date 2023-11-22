import { LightningElement } from 'lwc';
import renderScreenOne from './renderScreenOne.html';
import renderScreenTwo from './renderScreenTwo.html';
import defaultTemplate from './renderMultipleTemplates.html';

export default class RenderMultipleTemplates extends LightningElement {

    selected = null;

    handleClick(event){
          this.selected = event.target.label;
    }

    render(){
        return this.selected === 'Sign Up' ? renderScreenTwo :
        this.selected === 'Sign In' ? renderScreenOne :
        defaultTemplate
    }



}