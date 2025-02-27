public with sharing class invoiceCreateController {
    public invoiceCreateController() {

        @AuraEnabled
        public static integer getRecordCount(){
            integer recordCount = [SELECT count() FROM Invoice__c];
            return recordCount;
        }

    }
}