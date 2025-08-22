public with sharing class AccountController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts() {
    try {
      return [
        SELECT Id, Name, Industry
        FROM Account
        WITH SECURITY_ENFORCED
        LIMIT 5000
      ];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
