import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Frames Tests', () => {
  test.beforeEach(async ({ framesPage }) => {
    await framesPage.navigateToFrames();
  });

  test('should display frames', async ({ framesPage }) => {
    await test.step('Verify frames are present', async () => {
      const count = await framesPage.getIframeCount();
      expect(count).toBeGreaterThan(0);
    });
  });

  test('should get frame titles', async ({ framesPage }) => {
    await test.step('Get frame sources', async () => {
      const titles = await framesPage.getFrameTitles();
      expect(titles.length).toBeGreaterThan(0);
    });
  });
});
