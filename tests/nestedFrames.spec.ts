import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Nested Frames Tests @frame @hello1', () => {
  test('should navigate to nested frames page', async ({ nestedFramesPage }) => {
    await nestedFramesPage.navigateToNestedFrames();
    const url = nestedFramesPage.getCurrentUrl();
    expect(url).toContain('/nested_frames');
  });

  test('should detect nested frames', async ({ nestedFramesPage }) => {
    await nestedFramesPage.navigateToNestedFrames();
    const frameCount = await nestedFramesPage.getFrameCount();
    // There should be at least: main, top, left, middle, right, bottom
    expect(frameCount).toBeGreaterThan(1);
  });
});
