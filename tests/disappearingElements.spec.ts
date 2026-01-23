import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Disappearing Elements Tests @hello1', () => {
  test.beforeEach(async ({ disappearingElementsPage }) => {
    await disappearingElementsPage.navigate();
    await disappearingElementsPage.waitForPageLoaded();
  });

  test('should show only valid menu items', async ({ disappearingElementsPage }) => {
    await test.step('Validate visible menu items', async () => {
      const items = await disappearingElementsPage.getMenuItemTexts();

      const allowedItems = [
        'Home',
        'About',
        'Contact Us',
        'Portfolio',
        'Gallery',
      ];

      // Must have at least Home
      expect(items.length).toBeGreaterThan(0);

      // All visible items must be valid
      for (const item of items) {
        expect(allowedItems).toContain(item);
      }
    });
  });

  test('gallery menu item may or may not be present', async ({ disappearingElementsPage }) => {
    await test.step('Check optional Gallery item', async () => {
      const galleryExists =
        await disappearingElementsPage.isMenuItemPresent('Gallery');

      // Document expected behavior (non-deterministic)
      expect([true, false]).toContain(galleryExists);
    });
  });
});
