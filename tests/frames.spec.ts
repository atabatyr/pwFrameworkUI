import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Frames Page Tests @frames @hello1', () => {

  test.beforeEach(async ({ framesPage }) => {
    await framesPage.navigate();
    await framesPage.waitForPageLoaded();
  });

  test('@regression should navigate to Nested Frames', async ({ framesPage, page }) => {
    await framesPage.clickNestedFrames();
    await expect(page).toHaveURL(/.*\/nested_frames/);
  });

  test('@regression should navigate to iFrame', async ({ framesPage, page }) => {
    await framesPage.clickIFrame();
    await expect(page).toHaveURL(/.*\/iframe/);
  });

  test('@regression should read content from nested frame', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    // Switch to the top frame (frame-top)
    const frameTop = await page.frame({ name: 'frame-top' });
    expect(frameTop).not.toBeNull();

    // Inside top, switch to the middle frame (nested)
    const middleFrame = frameTop?.childFrames().find(f => f.name() === 'frame-middle');
    expect(middleFrame).not.toBeNull();

    const middleText = await middleFrame?.locator('#content').textContent();
    expect(middleText?.trim()).toBe('MIDDLE');
  });

  test('@regression should set TinyMCE content via JS', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');

    const frame = page.frameLocator('#mce_0_ifr');

    await frame.locator('body#tinymce').evaluate((el) => {
      el.innerHTML = '<p>Playwright injected this content!</p>';
    });

    const content = await frame.locator('body#tinymce').textContent();
    expect(content).toContain('Playwright injected this content!');
  });
});
