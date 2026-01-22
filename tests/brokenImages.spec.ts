import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Broken Images Tests', () => {
  test.beforeEach(async ({ brokenImagesPage }) => {
    await brokenImagesPage.navigateToBrokenImages();
  });

  test('should display images on page', async ({ brokenImagesPage }) => {
    await test.step('Verify images are present', async () => {
      const count = await brokenImagesPage.getImageCount();
      expect(count).toBeGreaterThan(0);
    });
  });

  test('should have image sources', async ({ brokenImagesPage }) => {
    await test.step('Get and verify image sources', async () => {
      const sources = await brokenImagesPage.getImageSources();
      expect(sources.length).toBeGreaterThan(0);
      sources.forEach(src => {
        expect(src).toBeTruthy();
      });
    });
  });

  test('should contain both working and broken images', async ({ brokenImagesPage }) => {
    await test.step('Verify image loading statuses', async () => {
      const statuses = await brokenImagesPage.getImageLoadingStatuses();
      expect(statuses.length).toBeGreaterThan(0);
      // Should have at least one loaded and one broken image
      const hasLoaded = statuses.some(status => status);
      const hasBroken = statuses.some(status => !status);
      expect(hasLoaded).toBeTruthy();
      expect(hasBroken).toBeTruthy();
    });
  });
});
