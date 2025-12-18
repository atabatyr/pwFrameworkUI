import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Redirect Link Tests', () => {
  test('should navigate to redirect page', async ({ redirectLinkPage }) => {
    await redirectLinkPage.navigateToRedirectLink();
    const url = await redirectLinkPage.getCurrentUrl();
    expect(url).toContain('/redirect');
  });

  test('should follow redirect link', async ({ redirectLinkPage }) => {
    await redirectLinkPage.navigateToRedirectLink();
    const initialUrl = await redirectLinkPage.getCurrentUrl();
    await redirectLinkPage.clickRedirectLink();
    const finalUrl = await redirectLinkPage.getCurrentUrl();
    expect(finalUrl).not.toEqual(initialUrl);
  });
});
