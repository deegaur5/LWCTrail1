import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import INV_NUMBER from '@salesforce/schema/Invoice__c.Name'
import INV_CUSTOMER_NAME from '@salesforce/schema/Invoice__c.Customer_Name__c';
import INV_AMOUNT from '@salesforce/schema/Invoice__c.Amount__c';
import INV_DUE_DATE from '@salesforce/schema/Invoice__c.Due_Date__c'
import INV_STATUS from '@salesforce/schema/Invoice__c.Status__c';

export default class CreateInvoice extends LightningElement {

    fields = [INV_NUMBER,INV_CUSTOMER_NAME,INV_AMOUNT,INV_DUE_DATE,INV_STATUS];

    handleSuccess(){
        const evt = new ShowToastEvent({
            title: 'Invoice Created Successfully',
            Message: 'Invoice Number: '+INV_NUMBER,
            Variant: 'Success'
        });

        this.dispatchEvent(evt);
        
    }
}