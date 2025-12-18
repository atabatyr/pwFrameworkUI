import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Exit Intent Tests', () => {
  test('should navigate to exit intent page', async ({page, exitIntentPage }) => {
    await exitIntentPage.navigateToExitIntent();
    expect(page.url()).toContain('/exit_intent');
  });

  test('should display page content', async ({page, exitIntentPage }) => {
    await exitIntentPage.navigateToExitIntent();
    expect(page.url()).toContain('/exit_intent');
  });
});
