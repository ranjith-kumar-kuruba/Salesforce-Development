public with sharing class AccountController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts() {
    try {
      return [
        SELECT Id, Name, Industry, Phone
        FROM Account
        WITH SECURITY_ENFORCED
        LIMIT 50000
      ];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
