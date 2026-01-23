import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Basic Auth Tests @hello1', () => {
  test.beforeEach(async ({ basicAuthPage }) => {
    await basicAuthPage.navigateToBasicAuth('admin', 'admin');
  });

  test('should successfully authenticate with correct credentials', async ({ basicAuthPage }) => {
    await test.step('Verify success message is displayed', async () => {
      const isDisplayed = await basicAuthPage.isSuccessMessageDisplayed();
      expect(isDisplayed).toBeTruthy();
    });

    await test.step('Verify success message contains congratulations text', async () => {
      const message = await basicAuthPage.getSuccessMessage();
      expect(message).toContain('Congratulations! You must have the proper credentials.');
    });
  });

  test('should display proper credentials message on authentication success', async ({ basicAuthPage }) => {
    await test.step('Verify full success message', async () => {
      const message = await basicAuthPage.getSuccessMessage();
      expect(message).toContain('Congratulations! You must have the proper credentials.');
    });
  });
});