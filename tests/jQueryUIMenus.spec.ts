import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('JQuery UI Menus Tests', () => {
  test('should navigate to jquery ui menus page', async ({page, jQueryUIMenusPage }) => {
    await jQueryUIMenusPage.navigateToJQueryUIMenus();
    expect(page.url()).toContain('/jqueryui/menu');
  });

  test('should display menu', async ({ jQueryUIMenusPage }) => {
    await jQueryUIMenusPage.navigateToJQueryUIMenus();
    expect(await jQueryUIMenusPage.isMenuDisplayed()).toBeTruthy();
  });

  test('should have menu items', async ({ jQueryUIMenusPage }) => {
    await jQueryUIMenusPage.navigateToJQueryUIMenus();
    const count = await jQueryUIMenusPage.getMenuItemCount();
    expect(count).toBeGreaterThan(0);
  });
});
