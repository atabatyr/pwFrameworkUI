import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Multiple Windows Tests @windows @hello1', () => {
  test.beforeEach(async ({ page, multipleWindowsPage }) => {
    await multipleWindowsPage.navigateToMultipleWindows();
  });

  test('should verify current window title and URL', async ({ multipleWindowsPage }) => {
    await test.step('Verify window title and URL', async () => {
      const title = await multipleWindowsPage.getCurrentWindowTitle();
      const url = await multipleWindowsPage.getCurrentWindowURL();

      expect(title).toBe('The Internet');
      expect(url).toContain('/windows');
    });
  });

  test('should open new window and verify its title', async ({ multipleWindowsPage }) => {
    await test.step('Open and verify new window', async () => {
      const newWindow = await multipleWindowsPage.openNewWindow();
      const newWindowTitle = await newWindow.title();

      expect(newWindowTitle).toBe('New Window');

      await newWindow.close();
    });
  });
});
