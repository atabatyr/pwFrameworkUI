import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Typos Tests', () => {
  test('should navigate to typos page', async ({ typosPage }) => {
    await typosPage.navigateToTypos();
    expect(typosPage.page.url()).toContain('/typos');
  });

  test('should display page content', async ({ typosPage }) => {
    await typosPage.navigateToTypos();
    const content = await typosPage.getPageContent();
    expect(content.length).toBeGreaterThan(0);
  });

  test('should contain typos in content', async ({ typosPage }) => {
    await typosPage.navigateToTypos();
    const hasTypos = await typosPage.checkForTypos();
    expect(hasTypos).toBeTruthy();
  });
});
