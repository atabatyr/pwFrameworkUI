import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Shadow DOM Tests', () => {
  test('should navigate to shadow dom page', async ({page, shadowDOMPage }) => {
    await shadowDOMPage.navigateToShadowDOM();
    expect(page.url()).toContain('/shadow_dom');
  });

  test('should detect shadow dom host element', async ({ shadowDOMPage }) => {
    await shadowDOMPage.navigateToShadowDOM();
    expect(await shadowDOMPage.isHostElementVisible()).toBeTruthy();
  });

  test('should access shadow dom content', async ({ shadowDOMPage }) => {
    await shadowDOMPage.navigateToShadowDOM();
    const content = await shadowDOMPage.getShadowDOMContent();
    expect(content.length).toBeGreaterThan(0);
  });
});
