import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('JavaScript Alerts Tests @alerts @hello1', () => {

  test.beforeEach(async ({ alertsPage }) => {
    await alertsPage.navigate();
    await alertsPage.waitForPageLoaded();
  });

  test('@regression should accept JS alert', async ({ alertsPage }) => {
    await alertsPage.triggerAlertAndAccept();
    const result = await alertsPage.getResultText();
    expect(result).toContain('You successfully clicked an alert');
  });

  test('@regression should accept JS confirm', async ({ alertsPage }) => {
    await alertsPage.triggerConfirmAndAccept();
    const result = await alertsPage.getResultText();
    expect(result).toContain('You clicked: Ok');
  });

  test('@regression should dismiss JS confirm', async ({ alertsPage }) => {
    await alertsPage.triggerConfirmAndDismiss();
    const result = await alertsPage.getResultText();
    expect(result).toContain('You clicked: Cancel');
  });

  test('@regression should enter text in JS prompt', async ({ alertsPage }) => {
    await alertsPage.triggerPromptAndType('Playwright');
    const result = await alertsPage.getResultText();
    expect(result).toContain('You entered: Playwright');
  });

  test('@regression should dismiss JS prompt', async ({ alertsPage }) => {
    await alertsPage.triggerPromptAndDismiss();
    const result = await alertsPage.getResultText();
    expect(result).toContain('You entered: null');
  });
});
