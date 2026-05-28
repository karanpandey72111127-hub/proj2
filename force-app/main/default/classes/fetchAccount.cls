public with sharing class fetchAccount {
    
    @AuraEnabled(cacheable=true)
    public static  List<Opportunity> getOpp(string stage){
        return [SELECT Id, Name, StageName FROM Opportunity WHERE StageName =: stage];
    }
}