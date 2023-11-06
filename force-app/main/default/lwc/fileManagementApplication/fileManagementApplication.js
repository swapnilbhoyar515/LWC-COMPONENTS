import { LightningElement, track } from 'lwc';

export default class CloudFiles extends LightningElement {
  @track fileData = [
    // Sample data structure: { Id: '1', Name: 'File 1', Size: '10 KB' }
  ];

  columns = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Uploaded By', fieldName: 'Uploaded By', type: 'text' },
    { label: 'Uploaded On', fieldName: 'Uploaded On', type: 'text' },
    { label: 'Time Spent', fieldName: 'Time Spent', type: 'text' },
    { label: 'Views', fieldName: 'Views', type: 'text' },
    { label: 'Status', fieldName: 'Status', type: 'text' }

  ];

  handleAddFile() {
    
  }


  @track isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

    contacts = [
        { Id: '001', FileName: 'Doc file', FileSize: '2Mb' },
        { Id: '002',FileName : 'work file', FileSize: '3Mb' },
        { Id: '003', FileName: 'Doc sheet',FileSize: '1Mb'}
    ];

    columnss = [
        { label: 'FileName', fieldName: 'FileName' },
        { label: 'FileSize', fieldName: 'FileSize' },
        
    ];

}