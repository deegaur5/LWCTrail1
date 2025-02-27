import { LightningElement } from 'lwc';
import getRecordCount from '@salesforce/apex/invoiceCreateController.getRecordCount';

export default class InvoiceButtonHome extends LightningElement {

    totalRecCount;
    errorTotal;
    
    getInvoiceRecords(){
        getRecordCount()
        .then(result => {
            this.totalRecCount = result;
            this.error = undefined;
        })
        .catch(error => {
            this.errorTotal = error;
            this.totalRecCount = undefined;
        });
    }
}