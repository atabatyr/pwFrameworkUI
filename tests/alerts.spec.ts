import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('JavaScript Alerts Tests', () => {
  test.beforeEach(async ({ alertsPage }) => {
    await alertsPage.navigateToAlerts();
  });

  test('should trigger JS alert successfully', async ({ alertsPage }) => {
    await test.step('Trigger alert and verify result', async () => {
      await alertsPage.triggerAlert();
      const result = await alertsPage.getResultMessage();
      expect(result).toContain('You successfully clicked an alert');
    });
  });

  test('should trigger JS confirm and accept', async ({ alertsPage }) => {
    await test.step('Trigger confirm and accept', async () => {
      await alertsPage.triggerConfirmAndAccept();
      const result = await alertsPage.getResultMessage();
      expect(result).toContain('You clicked: Ok');
    });
  });

  test('should trigger JS confirm and dismiss', async ({ alertsPage }) => {
    await test.step('Trigger confirm and dismiss', async () => {
      await alertsPage.triggerConfirmAndDismiss();
      const result = await alertsPage.getResultMessage();
      expect(result).toContain('You clicked: Cancel');
    });
  });

  test('should trigger JS prompt with text', async ({ alertsPage }) => {
    await test.step('Trigger prompt and enter text', async () => {
      const testText = 'Hello Test';
      await alertsPage.triggerPromptWithText(testText);
      const result = await alertsPage.getResultMessage();
      expect(result).toContain(testText);
    });
  });
});
