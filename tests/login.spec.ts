import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Login Tests @login @hello1', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test('@smoke should login successfully with valid credentials', async ({ loginPage }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await loginPage.assertFlashContains('You logged into a secure area!');
  });

  test('should show error for invalid username', async ({ loginPage }) => {
    await loginPage.login('wronguser', 'SuperSecretPassword!');
    await loginPage.assertFlashContains('Your username is invalid!');
  });

  test('should show error for invalid password', async ({ loginPage }) => {
    await loginPage.login('tomsmith', 'wrongpassword');
    await loginPage.assertFlashContains('Your password is invalid!');
  });

  test('should show error when fields are empty', async ({ loginPage }) => {
    await loginPage.login('', '');
    await loginPage.assertFlashContains('Your username is invalid!');
  });
});
