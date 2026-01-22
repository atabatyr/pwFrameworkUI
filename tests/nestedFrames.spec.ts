import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Nested Frames Tests', () => {
  test('should navigate to nested frames page', async ({ nestedFramesPage }) => {
    await nestedFramesPage.navigateToNestedFrames();
    expect(nestedFramesPage.page.url()).toContain('/nested_frames');
  });

  test('should detect nested iframes', async ({ nestedFramesPage }) => {
    await nestedFramesPage.navigateToNestedFrames();
    const count = await nestedFramesPage.getIframeCount();
    expect(count).toBeGreaterThan(0);
  });
});
