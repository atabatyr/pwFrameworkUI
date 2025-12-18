import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Context Menu Tests', () => {
  test.beforeEach(async ({ contextMenuPage }) => {
    await contextMenuPage.navigateToContextMenu();
  });

  test('should display context menu element', async ({ contextMenuPage }) => {
    await test.step('Verify element is visible', async () => {
      const isVisible = await contextMenuPage.isBoxVisible();
      expect(isVisible).toBeTruthy();
    });
  });

  test('should trigger alert on right click', async ({ contextMenuPage }) => {
    await test.step('Right click and handle dialog', async () => {
      const alertPromise = contextMenuPage.rightClickOnBox();
      const alert = await alertPromise;
      expect(alert).toBeDefined();
      await alert.accept();
    });
  });
});
