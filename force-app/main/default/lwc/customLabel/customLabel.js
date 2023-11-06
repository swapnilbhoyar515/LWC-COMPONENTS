import { LightningElement } from 'lwc';
import WelcomeMessage from '@salesforce/label/c.WelcomeMessage';
import Declaration from '@salesforce/label/c.Declaration';
import Disclamier from '@salesforce/label/c.Disclamier';

export default class CustomLabel extends LightningElement {
    label ={
        WelcomeMessage,
        Declaration,
        Disclamier

    }
}
