public  class AccountControllerClass {
    @AuraEnabled(cacheable=true)
    public static Integer getAccountEventsCount(Id accountId) {
        return [SELECT COUNT() FROM Event WHERE WhatId = :accountId];
    }
    
    @AuraEnabled
    public static List<ContentDocumentLink> fetchFiles(String recordId){
        return [SELECT LinkedEntityId, ContentDocument.CreatedDate, ContentDocument.Title, ContentDocument.ContentSize, ContentDocument.FileType 
                FROM ContentDocumentLink  
                WHERE LinkedEntityId  =:recordId];
    }
}