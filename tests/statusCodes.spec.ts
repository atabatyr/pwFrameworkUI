import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Status Codes Tests', () => {
  test.beforeEach(async ({ statusCodesPage }) => {
    await statusCodesPage.navigateToStatusCodes();
  });

  test('should navigate to 200 status code', async ({ statusCodesPage }) => {
    await test.step('Check 200 status', async () => {
      const result = await statusCodesPage.checkStatusCode('200');
      expect(result).toBeTruthy();
    });
  });

  test('should navigate to 301 status code', async ({ statusCodesPage }) => {
    await test.step('Check 301 status', async () => {
      const result = await statusCodesPage.checkStatusCode('301');
      expect(result).toBeTruthy();
    });
  });

  test('should navigate to 404 status code', async ({ statusCodesPage }) => {
    await test.step('Check 404 status', async () => {
      const result = await statusCodesPage.checkStatusCode('404');
      expect(result).toBeTruthy();
    });
  });

  test('should navigate to 500 status code', async ({ statusCodesPage }) => {
    await test.step('Check 500 status', async () => {
      const result = await statusCodesPage.checkStatusCode('500');
      expect(result).toBeTruthy();
    });
  });
});
