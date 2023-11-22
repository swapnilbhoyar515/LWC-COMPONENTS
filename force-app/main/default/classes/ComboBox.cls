public class ComboBox {
   @AuraEnabled
    public static list<account> getAccounts(){
        return [Select Id,Name From Account];
    }
    
    @AuraEnabled
    public static list<contact> getContacts(string accId){
        return [Select Id,Name,AccountId,Email from Contact Where AccountId =:accId];
    }
}