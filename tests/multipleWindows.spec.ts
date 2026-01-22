import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Multiple Windows Tests', () => {
  test.beforeEach(async ({ multipleWindowsPage }) => {
    await multipleWindowsPage.navigateToMultipleWindows();
  });

  test('should verify current window', async ({ multipleWindowsPage }) => {
    await test.step('Verify window title and URL', async () => {
      const title = await multipleWindowsPage.getCurrentWindowTitle();
      const url = await multipleWindowsPage.getCurrentWindowURL();
      expect(title).toBeTruthy();
      expect(url).toContain('windows');
    });
  });

  test('should open new window', async ({ multipleWindowsPage }) => {
    await test.step('Open and verify new window', async () => {
      const newWindow = await multipleWindowsPage.openNewWindow();
      expect(newWindow).toBeDefined();
      const newWindowTitle = await newWindow.title();
      expect(newWindowTitle).toBeTruthy();
      await newWindow.close();
    });
  });
});
