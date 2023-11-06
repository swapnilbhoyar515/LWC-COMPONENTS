import { LightningElement,track } from 'lwc';

export default class ModalDemoInLWC extends LightningElement {
    @track isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }
    @track fileData = [
            { Id: '001', Views: 'Gujrat,India', Email: 'john.doe@example.com', TimeSpent: '1 min', Sessions: '4', LastViewedOn: '1/10/2022' },
            { Id: '002', Views: 'Pune,India', Email: 'jane.smith@example.com', TimeSpent: '30 sec', Sessions: '3', LastViewedOn: '2/6/2021' },
            { Id: '003', Views: 'Delhi,India', Email: 'bob.johnson@example.com', TimeSpent: '2 sec', Sessions: '2', LastViewedOn: '5/7/2021' }
        ];
      
    
      columns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Uploaded By', fieldName: 'Uploaded By', type: 'text' },
        { label: 'Uploaded On', fieldName: 'Uploaded On', type: 'text' },
        { label: 'Time Spent', fieldName: 'Time Spent', type: 'text' },
        { label: 'Views', fieldName: 'Views', type: 'text' },
        { label: 'Status', fieldName: 'Status', type: 'text' }
    
      ];
}