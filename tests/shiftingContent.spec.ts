import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Shifting Content Tests', () => {
  test('should navigate to shifting content page', async ({page, shiftingContentPage }) => {
    await shiftingContentPage.navigateToShiftingContent();
    expect(page.url()).toContain('/shifting_content');
  });

  test('should handle shifting content', async ({ shiftingContentPage }) => {
    await shiftingContentPage.navigateToShiftingContent();
    const visible = await shiftingContentPage.isContentShifting();
    expect(visible).toBeTruthy();
  });

  test('should maintain layout after reload', async ({ shiftingContentPage }) => {
    await shiftingContentPage.navigateToShiftingContent();
    const layoutStable = await shiftingContentPage.reloadAndCheckLayout();
    expect(layoutStable).toBeTruthy();
  });
});
