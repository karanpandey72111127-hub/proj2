global with sharing class getCases {
    
    @auraEnabled(cacheable=true)
    global  static List<Case> fetchRecent()
    {
         return [SELECT Id, Subject, Status FROM Case ORDER BY CreatedDate DESC LIMIT 20];
    }
}