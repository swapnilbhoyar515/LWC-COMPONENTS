import { LightningElement, track } from 'lwc';
import LightningModal from 'lightning/modal';
import GoogleDrive from '@salesforce/resourceUrl/GoogleDrive';
import DropBox from '@salesforce/resourceUrl/DropBox';
import SharePoint from '@salesforce/resourceUrl/SharePoint';
import OneDrive from '@salesforce/resourceUrl/OneDrive';

export default class UploadFilesDropBox extends LightningElement {
    GoogleDrive = GoogleDrive;
    OneDrive = OneDrive;
    SharePoint = SharePoint;
    DropBox = DropBox;
    @track data = [
        { id: '1', name: 'Contract.pdf', owner: 'John Doe', uploadedOn: '2023-05-01' },
        { id: '2', name: 'Untitled Project', owner: 'John Doe', uploadedOn: '2023-05-02' },
        { id: '3', name: 'Financial Analysis', owner: 'John Doe', uploadedOn: '2023-05-03' },
        { id: '4', name: 'SAAS Format.xlsx', owner: 'John Doe', uploadedOn: '2023-05-04' },
        { id: '5', name: 'Cover Page Garg.pdf', owner: 'John Doe', uploadedOn: '2023-05-05' },
        { id: '6', name: 'HS Community -LinkedHelper Webhook', owner: 'John Doe', uploadedOn: '2023-05-06' },
        { id: '7', name: 'Company Name to URL Converter', owner: 'John Doe', uploadedOn: '2023-05-07' }
    ];

    columns = [
        { label: 'Name', fieldName: 'name' },
        { label: 'Owner', fieldName: 'owner' },
        { label: 'Uploaded On', fieldName: 'uploadedOn' },
        {
            type: 'action',
            typeAttributes: { rowActions: [{ label: 'Edit', name: 'edit' },{ label: 'Delete', name: 'delete' }] }
        }
    ];

    handleRowAction(event) {
        const action = event.detail.action;
        const row = event.detail.row;

        if (action.name === 'more') {
            
            console.log('More action clicked for row:', row);
        }
    }



    @track customFormModal = false; 
    
    customShowModalPopup() {            
        this.customFormModal = true;
    }
 
    customHideModalPopup() {    
        
        this.customFormModal = false;
    }
    
    @track customFolderModal = false; 
    
    customShowFolderPopup() {            
        this.customFolderModal = true;
    }
 
    customHideFolderPopup() {    
        
        this.customFolderModal = false;
    }

    @track customFormModal = false;
    @track showDataTable = false;
    @track uploadedFiles = [];
    datatableColumns = [
        { label: 'File Name', fieldName: 'name' },
        { label: 'Uploaded Date', fieldName: 'lastModifiedDate', type: 'date' },
        { label: 'File Type', fieldName: 'type' }
    ];

    // Function to handle file upload finished event
    handleUploadFinished(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;

        const today = new Date().toISOString().split('T')[0];
        // Map the uploaded files to the required format for the datatable
        const filesData = uploadedFiles.map(file => ({
            id: file.documentId,
            name: file.name,
            lastModifiedDate: today,
            type: file.type
        }));

        // Concatenate the new files with the existing uploaded files
        this.uploadedFiles = this.uploadedFiles.concat(filesData);
    }

    // Function to show the datatable preview
    showPreview() {
        this.showDataTable = true;
    }


    @track fileInputVisible = false;
    @track primaryActionVisible = true;

    handlePrimaryActionClick() {
        this.fileInputVisible = true;
        this.primaryActionVisible = false;
    }

    handleFileChange(event) {
        // Handle file selection logic here
    }

    handleCancelClick() {
        this.fileInputVisible = false;
        this.primaryActionVisible = true;
    }
}