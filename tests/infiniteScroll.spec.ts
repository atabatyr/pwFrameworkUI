import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Infinite Scroll Tests', () => {
  test('should navigate to infinite scroll page', async ({page, infiniteScrollPage }) => {
    await infiniteScrollPage.navigateToInfiniteScroll();
    expect(page.url()).toContain('/infinite_scroll');
  });

  test('should load content on scroll', async ({ infiniteScrollPage }) => {
    await infiniteScrollPage.navigateToInfiniteScroll();
    const count = await infiniteScrollPage.getElementCount();
    expect(count).toBeGreaterThan(0);
  });
});
