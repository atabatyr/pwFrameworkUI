import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Dynamic Content Tests @hello1', () => {

  test.beforeEach(async ({ dynamicContentPage }) => {
    await dynamicContentPage.navigate();
    await dynamicContentPage.waitForPageLoaded();
  });

  test('should load Dynamic Content page', async ({ dynamicContentPage }) => {
    await test.step('Verify page header text', async () => {
      await expect(dynamicContentPage.header).toHaveText('Dynamic Content');
    });
  });

  test('should display dynamic content blocks', async ({ dynamicContentPage }) => {
    await test.step('Verify content blocks are present', async () => {
      const texts = await dynamicContentPage.getAllTextContents();

      expect(texts.length).toBe(3);
      texts.forEach(text => {
        expect(text.length).toBeGreaterThan(0);
      });
    });
  });

  test('should change content after page reload', async ({ dynamicContentPage }) => {
    let initialContent: string[];
    await test.step('Capture initial content', async () => {
      initialContent = await dynamicContentPage.getAllTextContents();
    });

    await test.step('Reload page', async () => {
      await dynamicContentPage.reloadPage();
    });

    await test.step('Verify content changed', async () => {
      const updatedContent = await dynamicContentPage.getAllTextContents();
      expect(updatedContent).not.toEqual(initialContent);
    });
  });

  test('should keep structure stable when static parameter is used', async ({ dynamicContentPage }) => {
    await dynamicContentPage.navigateWithStaticContent();
    await dynamicContentPage.waitForPageLoaded();

    const firstLoad = await dynamicContentPage.getAllTextContents();

    await dynamicContentPage.reloadPage();

    const secondLoad = await dynamicContentPage.getAllTextContents();

    // ✅ structure is stable
    expect(secondLoad.length).toBe(firstLoad.length);

    // ✅ content is present
    secondLoad.forEach(text => {
      expect(text.length).toBeGreaterThan(0);
    });
  });


});
