import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Disappearing Elements Tests', () => {
  test.beforeEach(async ({ disappearingElementsPage }) => {
    await disappearingElementsPage.navigateToDisappearingElements();
  });

  test('should display disappearing elements', async ({ disappearingElementsPage }) => {
    await test.step('Get initial element count', async () => {
      const count = await disappearingElementsPage.getElementCount();
      expect(count).toBeGreaterThan(0);
    });
  });

  test('should get element texts', async ({ disappearingElementsPage }) => {
    await test.step('Get all element texts', async () => {
      const texts = await disappearingElementsPage.getElementTexts();
      expect(texts.length).toBeGreaterThan(0);
    });
  });

  test('should show element count may change on reload', async ({ disappearingElementsPage }) => {
    await test.step('Reload and check count', async () => {
      const initialCount = await disappearingElementsPage.getElementCount();
      const reloadCount = await disappearingElementsPage.reloadAndGetElementCount();
      // Count should be present in both cases
      expect(initialCount).toBeGreaterThan(0);
      expect(reloadCount).toBeGreaterThan(0);
    });
  });
});
