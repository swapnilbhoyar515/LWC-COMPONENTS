import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track num1;
    @track num2;
    @track result;

    handleChange(event){
    if(event.target.label=="Num1"){
        this.num1 = event.target.value;
    }
    if(event.target.label=="Num2"){
        this.num2 = event.target.value;
    }
    }

    handleClick(event){
        if(event.target.label=="Add"){
            this.result = parseInt(this.num1) + parseInt(this.num2);
        }
        if(event.target.label=="Substract"){
            this.result = parseInt(this.num1) - parseInt(this.num2);
        }
        if(event.target.label=="Multiply"){
            this.result = parseInt(this.num1) * parseInt(this.num2);
        }
        if(event.target.label=="Divide"){
            this.result = parseInt(this.num1) - parseInt(this.num2);
        }
        if(event.target.label=="Reset"){
            this.num1 ='';
            this.num2='';
        }


    }
    
}