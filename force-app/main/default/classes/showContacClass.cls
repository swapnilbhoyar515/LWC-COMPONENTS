public class showContacClass {
    @AuraEnabled
    public static list<Account> getContactDetails(string recId){
        list<Account> acList =[Select Id,(Select Id,FirstName,LastName from contacts) from Account Where Id =:recId];
        system.debug('acList:'+acList);
        
        //Null Check
        if(!acList.isEmpty()){
            return acList;
        }
        return null;
    }

}