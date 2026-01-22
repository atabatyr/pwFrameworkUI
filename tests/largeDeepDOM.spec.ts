import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Large & Deep DOM Tests', () => {
  test('should navigate to large deep dom page', async ({page, largeDeepDOMPage }) => {
    await largeDeepDOMPage.navigateToLargeDeepDOM();
    expect(page.url()).toContain('/large');
  });

  test('should load large dom page', async ({ largeDeepDOMPage }) => {
    await largeDeepDOMPage.navigateToLargeDeepDOM();
    expect(await largeDeepDOMPage.isPageLoaded()).toBeTruthy();
  });
});
