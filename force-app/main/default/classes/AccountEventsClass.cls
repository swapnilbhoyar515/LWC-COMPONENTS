public class AccountEventsClass {
    @AuraEnabled(cacheable=true)
    public static List<Event> getAccountEvents(Id accountId) {
        return [SELECT Id, Subject, StartDateTime, EndDateTime
                FROM Event
                WHERE WhatId = :accountId];
    }
}