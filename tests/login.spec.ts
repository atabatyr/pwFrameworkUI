import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateToLogin();
  });

  test('should load login page successfully', async ({ loginPage }) => {
    await test.step('Verify login page is loaded', async () => {
      await loginPage.verifyLoginPageLoaded();
      const title = await loginPage.getPageTitle();
      expect(title).toContain('The Internet');
    });
  });

  test('should login with valid credentials', async ({ loginPage }) => {
    await test.step('Enter valid credentials', async () => {
      await loginPage.login('tomsmith', 'SuperSecretPassword!');
    });

    await test.step('Verify login success', async () => {
      const message = await loginPage.verifyLoginSuccess();
      expect(message.toLowerCase()).toContain('secure area');
    });
  });

  test('should display error message with invalid credentials', async ({ loginPage }) => {
    await test.step('Enter invalid credentials', async () => {
      await loginPage.login('invaliduser', 'wrongpassword');
    });

    await test.step('Verify error message is displayed', async () => {
      const isError = await loginPage.isErrorDisplayed();
      expect(isError).toBeTruthy();
      const errorText = await loginPage.verifyLoginError();
      expect(errorText.toLowerCase()).toContain('invalid');
    });
  });

  test('should display error with invalid username only', async ({ loginPage }) => {
    await test.step('Enter invalid username', async () => {
      await loginPage.login('wronguser', 'SuperSecretPassword!');
    });

    await test.step('Verify error message', async () => {
      const isError = await loginPage.isErrorDisplayed();
      expect(isError).toBeTruthy();
    });
  });

  test('should display error with invalid password only', async ({ loginPage }) => {
    await test.step('Enter valid username but invalid password', async () => {
      await loginPage.login('tomsmith', 'WrongPassword');
    });

    await test.step('Verify error message', async () => {
      const isError = await loginPage.isErrorDisplayed();
      expect(isError).toBeTruthy();
    });
  });
});
