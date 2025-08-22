@isTest
private class AccountControllerTest {
  @TestSetup
  static void makeData() {
    List<Account> accounts = new List<Account>();
    for (Integer i = 0; i < 5; i++) {
      accounts.add(
        new Account(Name = 'Test Account ' + i, Industry = 'Test Industry')
      );
    }
    insert accounts;
  }

  @isTest
  static void testGetAccounts() {
    // Test logic goes here
    Test.startTest();
    List<Account> accounts = AccountController.getAccounts();
    Test.stopTest();
    System.assertNotEquals(null, accounts, 'Accounts list should not be null');
    System.assertEquals(5, accounts.size(), 'Expected 5 accounts');
  }
}
