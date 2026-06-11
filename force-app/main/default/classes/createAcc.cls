public with sharing class createAcc {
    @auraenabled(cacheable=true)
    public static with sharing void acr(String accName) {
        Account acc = new Account();
        acc.Name = accName;
        insert acc;  
    }
}