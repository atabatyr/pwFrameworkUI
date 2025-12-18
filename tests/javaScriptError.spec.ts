import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('JavaScript Error Tests', () => {
  test('should navigate to javascript error page', async ({page, javaScriptErrorPage }) => {
    await javaScriptErrorPage.navigateToJavaScriptError();
    expect(page.url()).toContain('/javascript_error');
  });

  test('should load page with content', async ({ javaScriptErrorPage }) => {
    await javaScriptErrorPage.navigateToJavaScriptError();
    expect(await javaScriptErrorPage.isPageLoaded()).toBeTruthy();
  });
});
