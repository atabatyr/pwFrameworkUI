import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Context Menu Tests @hello12', () => {
  test.beforeEach(async ({ contextMenuPage }) => {
    await contextMenuPage.navigateToContextMenu();
    await contextMenuPage.waitForPageLoaded();
  });

  test('@regression should display context menu element', async ({ contextMenuPage }) => {
    await test.step('Verify element is visible', async () => {
      expect(await contextMenuPage.isBoxVisible()).toBe(true);
    });
  });

  test('@regression should trigger alert on right click', async ({ page, contextMenuPage }) => {
    await test.step('Right click and verify alert', async () => {
      page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('You selected a context menu');
        await dialog.accept();
      });

      await contextMenuPage.rightClickOnBox();
    });
  });
});
