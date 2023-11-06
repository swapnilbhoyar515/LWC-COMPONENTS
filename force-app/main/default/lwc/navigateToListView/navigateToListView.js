import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/Navigation'

export default class NavigateToListView extends LightningElement {
    navigateList(){
              this.[NavigationMixin.Navigate]({
                    type:'standard__objectPage',
                    attributes:{
                        objectApiName:'Contact',
                        actionName:'list'
                    },
                    state:{
                        
                    }
              })
    }
}