import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Slow Resources Tests', () => {
  test('should navigate to slow resources page', async ({ slowResourcesPage }) => {
    await slowResourcesPage.navigateToSlowResources();
    expect(slowResourcesPage.page.url()).toContain('/slow');
  });

  test('should wait for slow content to load', async ({ slowResourcesPage }) => {
    await slowResourcesPage.navigateToSlowResources();
    await slowResourcesPage.waitForContentToLoad();
    expect(await slowResourcesPage.isContentVisible()).toBeTruthy();
  });
});
