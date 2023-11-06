public  class AccountControllerClass {
    @AuraEnabled(cacheable=true)
    public static Integer getAccountEventsCount(Id accountId) {
        return [SELECT COUNT() FROM Event WHERE WhatId = :accountId];
    }
}