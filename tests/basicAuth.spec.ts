import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Basic Auth Tests', () => {
  test('should successfully authenticate with correct credentials', async ({ basicAuthPage }) => {
    await test.step('Navigate to basic auth page with admin credentials', async () => {
      await basicAuthPage.navigateToBasicAuth('admin', 'admin');
    });

    await test.step('Verify authentication success', async () => {
      const isDisplayed = await basicAuthPage.isSuccessMessageDisplayed();
      expect(isDisplayed).toBeTruthy();
    });

    await test.step('Verify success message text', async () => {
      const message = await basicAuthPage.getSuccessMessage();
      expect(message).toContain('Congratulations');
    });
  });

  test('should display success message with correct credentials', async ({ basicAuthPage }) => {
    await test.step('Navigate with valid credentials', async () => {
      await basicAuthPage.navigateToBasicAuth('admin', 'admin');
    });

    await test.step('Get and verify full message', async () => {
      const message = await basicAuthPage.verifyAuthSuccess();
      expect(message.toLowerCase()).toContain('congratulations');
    });
  });

  test('should contain basic auth information in success message', async ({ basicAuthPage }) => {
    await test.step('Navigate with admin credentials', async () => {
      await basicAuthPage.navigateToBasicAuth('admin', 'admin');
    });

    await test.step('Verify message contains authentication details', async () => {
      const message = await basicAuthPage.getSuccessMessage();
      expect(message.length).toBeGreaterThan(0);
      expect(message).toContain('Congratulations! You must have the proper credentials.');
    });
  });
});
