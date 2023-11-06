import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

export default class FileList extends LightningElement {
  fileList = [];
  columns = [
    { label: 'File Name', fieldName: 'Title' },
    { label: 'File Type', fieldName: 'FileType' },
    { label: 'File Size', fieldName: 'ContentSize', type: 'number', cellAttributes: { alignment: 'left' } }
  ];

  @wire(getListUi, {
    objectApiName: 'ContentDocument',
    listViewApiName: 'AllFiles'
  })
  wiredFiles({ error, data }) {
    if (data) {
      this.fileList = data.records.records.map(record => {
        const fields = record.fields;
        return {
          Id: record.id,
          Title: fields.Title.value,
          FileType: fields.FileType.value,
          ContentSize: fields.ContentSize.value
        };
      });
    } else if (error) {
    }
  }
}