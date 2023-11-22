public class PaginationClass {
    @AuraEnabled(cacheable=true)
    public static list<account> getAccounts(){
        return [Select Id,Name From Account];
    }

}