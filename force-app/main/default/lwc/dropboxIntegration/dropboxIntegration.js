import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import createFolderap from '@salesforce/apex/ConnectDropBox.createFolderap';
import uploadFiles from '@salesforce/apex/ConnectDropBox.uploadFiles';


const FIELDS = ['Account.Name'];
export default class DropboxIntegration extends LightningElement {

    @api recordId;
    accountName;
    folderCreationStatus;
    selectedFile;
    selectedFileName;
    selectedFileSize;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredAccount({ error, data }) {
        if (data) {
            this.accountName = data.fields.Name.value;
        } else if (error) {
            console.log('Error >>>>>' +error)
        }
    }

    get accountId() {
        return this.recordId;
    }

    handleFileChange(event) {
        this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    this.getFileSize(this.selectedFile).then(fileSize => {
        this.selectedFileSize = this.formatFileSize(fileSize);
    });
}

getFileSize(file) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result.byteLength);
        };
        reader.readAsArrayBuffer(file);
    });
}

    createFolderAndUpload() {
        const folderName = this.accountName;
        const path = '/Account/' + folderName;

        // Check if the folder already exists
        createFolderap({ path })
            .then(result => {
                // Handle the response from Apex
                if (result && result.error_summary && result.error_summary.includes('path/conflict/folder')) {
                    // Folder already exists, generate a unique folder name
                    const timestamp = Date.now();
                    const uniqueFolderName = folderName + '-' + timestamp;
                    const uniquePath = '/Account/' + uniqueFolderName;

                    // Create the folder with the unique name
                    createFolderap({ path: uniquePath })
                        .then(() => {
                            // Folder created successfully, proceed with file upload
                            this.folderCreationStatus = 'Folder created::: ' + '/Account/'+ uniqueFolderName;
                            this.uploadFile(uniquePath);
                        })
                        .catch(error => {
                            // Handle any errors during folder creation
                            console.error('Error creating folder:', error);
                        });
                } else {
                    // Folder created successfully, proceed with file upload
                    this.folderCreationStatus = 'Folder created: ' + '/Account/'+ folderName;
                    this.uploadFile(path);
                }
            })
            .catch(error => {
                // Handle any errors during folder creation
                console.error('Error creating folder:', error);
            });
    }

    uploadFile(path) {
        // Upload file inside the folder
        uploadFiles({ fileName: this.selectedFile, path: this.path })
            .then(uploadResult => {
                // Handle the response from Apex
                console.log('File upload result:', uploadResult);
                // Additional logic after successful file upload
            })
            .catch(uploadError => {
                // Handle any errors during file upload
                console.error('Error uploading file:', uploadError);
            });
    }
}

