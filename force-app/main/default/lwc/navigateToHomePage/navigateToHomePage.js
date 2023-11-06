import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToHomePage extends NavigationMixin (LightningElement) {

    navigateToHome(){
     this[NavigationMixin.Navigate]({
        type:'standard__namedPage',
        attributes:{
            pageName:'home'
        }
     })
    }
}