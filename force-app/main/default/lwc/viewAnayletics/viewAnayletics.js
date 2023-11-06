import { LightningElement } from 'lwc';

export default class ViewAnayletics extends LightningElement {
    contacts = [
        { Id: '001', Views: 'Gujrat,India', Email: 'john.doe@example.com', TimeSpent: '1 min', Sessions: '4', LastViewedOn: '1/10/2022' },
        { Id: '002', Views: 'Pune,India', Email: 'jane.smith@example.com', TimeSpent: '30 sec', Sessions: '3', LastViewedOn: '2/6/2021' },
        { Id: '003', Views: 'Delhi,India', Email: 'bob.johnson@example.com', TimeSpent: '2 sec', Sessions: '2', LastViewedOn: '5/7/2021' }
    ];

    columns = [
        { label: 'Views', fieldName: 'Views' },
        { label: 'Account', fieldName: 'Email' },
        { label: 'TimeSpent', fieldName: 'TimeSpent' },
        { label: 'Sessions', fieldName: 'Sessions' },
        { label: 'LastVieweOn', fieldName: 'LastViewedOn' }
    ];

    toggleSection(event) {
        let buttonid = event.currentTarget.dataset.buttonid;
        let currentsection = this.template.querySelector('[data-id="' + buttonid + '"]');
        if (currentsection.className.search('slds-is-open') == -1) {
            currentsection.className = 'slds-section slds-is-open';
        } else {
            currentsection.className = 'slds-section slds-is-close';
        }
    
};}