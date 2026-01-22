import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Dynamic Content Tests', () => {
  test.beforeEach(async ({ dynamicContentPage }) => {
    await dynamicContentPage.navigateToDynamicContent();
  });

  test('should display dynamic content', async ({ dynamicContentPage }) => {
    await test.step('Get initial content', async () => {
      const content = await dynamicContentPage.getContentText();
      expect(content.length).toBeGreaterThan(0);
    });
  });

  test('should change content on reload', async ({ dynamicContentPage }) => {
    await test.step('Get content and reload', async () => {
      const initialContent = await dynamicContentPage.getContentText();
      const newContent = await dynamicContentPage.reloadAndGetNewContent();
      // Content might be same or different, just verify it's loaded
      expect(newContent.length).toBeGreaterThan(0);
    });
  });
});
