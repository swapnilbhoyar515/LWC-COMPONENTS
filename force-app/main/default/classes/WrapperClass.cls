public class WrapperClass {
    @AuraEnabled(cacheable=true)
    public static list<accountContactWrapper> getAllAccountWithContact(){
        list<accountContactWrapper> accountWrapperList = new list<accountContactWrapper>();
        list<account> acList=[Select Id,Name,(Select Id,Name,FirstName,LastName,Email,MobilePhone from contacts) from account];
        if(!acList.isEmpty()){
            for(account ac:acList){
                accountContactWrapper accCon = new accountContactWrapper();
                accCon.accRecord = ac;
                accCon.conList = ac.contacts;
                accCon.contactCount = ac.contacts.size();
                accountWrapperList.add(accCon);
                
                
            }
        }
        system.debug('==='+accountWrapperList);
        return accountWrapperList;
    }

    public class accountContactWrapper{
        @AuraEnabled
        public account accRecord{get;set;}
        @AuraEnabled
        public list<contact> conList{get;set;}
        @AuraEnabled
        public integer contactCount{get;set;}
    }
}