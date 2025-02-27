import { LightningElement } from 'lwc';
import getRecordCount from '@salesforce/apex/invoiceCreateController.getRecordCount';

export default class InvoiceHomeCard extends LightningElement {

totalRecCount;
errorTotal;
        
    connectedCallback(){
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