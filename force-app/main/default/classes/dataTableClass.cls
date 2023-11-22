public class dataTableClass {
   @AuraEnabled(cacheable=true)
    public static list<Account> getAccountRecords(){
        return [Select Id,Name from Account];
    }
    
    @AuraEnabled(cacheable=true)
    public static list<contact> getContactRecords(string contactName){
        string key='%'+ contactName + '%';
        return [Select Id,Name From Contact Where Name like:key];
    }
    
    @AuraEnabled
    public static list<Account> getAccountRecordsShowButton(){
        return [Select Id,Name from Account];
    }
    
    
    
}