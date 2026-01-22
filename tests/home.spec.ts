import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Home Page Tests', () => {
  test('should load home page successfully', async ({ homePage }) => {
    await test.step('Navigate to home page', async () => {
      await homePage.navigateToHome();
      await homePage.verifyHomePageLoaded();
    });

    await test.step('Verify page heading', async () => {
      const heading = await homePage.getPageHeading();
      expect(heading).toContain('Welcome to the-internet');
    });
  });

  test('should display all available links on home page', async ({ homePage }) => {
    await test.step('Navigate to home page', async () => {
      await homePage.navigateToHome();
    });

    await test.step('Verify links are available', async () => {
      const links = await homePage.getAllLinks();
      expect(links.length).toBeGreaterThan(0);
    });
  });

  test('should navigate to login page from home page', async ({ homePage, loginPage }) => {
    await test.step('Navigate to home page', async () => {
      await homePage.navigateToHome();
    });

    await test.step('Click on login link', async () => {
      await homePage.clickLinkByText('Form Authentication');
      await loginPage.verifyLoginPageLoaded();
    });

    await test.step('Verify we are on login page', async () => {
      const url = await loginPage.getCurrentURL();
      expect(url).toContain('/login');
    });
  });
});
