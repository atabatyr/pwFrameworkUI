import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Floating Menu Tests', () => {
  test('should display floating menu', async ({ floatingMenuPage }) => {
    await floatingMenuPage.navigateToFloatingMenu();
    expect(await floatingMenuPage.isMenuVisible()).toBeTruthy();
  });

  test('should have menu content', async ({ floatingMenuPage }) => {
    await floatingMenuPage.navigateToFloatingMenu();
    const text = await floatingMenuPage.getMenuText();
    expect(text.length).toBeGreaterThan(0);
  });
});
