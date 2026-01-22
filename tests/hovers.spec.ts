import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Hovers Tests', () => {
  test.beforeEach(async ({ hoversPage }) => {
    await hoversPage.navigateToHovers();
  });

  test('@regressionshould display figures on hovers page', async ({ hoversPage }) => {
    await test.step('Verify figures are present', async () => {
      const count = await hoversPage.getNumberOfFigures();
      expect(count).toBeGreaterThan(0);
    });
  });

  test('@regressionshould display caption on hover', async ({ hoversPage }) => {
    await test.step('Hover over first figure and verify caption', async () => {
      await hoversPage.hoverOverFigure(0);
      const isVisible = await hoversPage.isCaptionVisible();
      expect(isVisible).toBeTruthy();
    });
  });

  test('@regression should display correct caption text on hover', async ({ hoversPage }) => {
    await test.step('Hover over figure and get caption text', async () => {
      await hoversPage.hoverOverFigure(1);
      const caption = await hoversPage.getCaptionTextForFigure(1);
      expect(caption.length).toBeGreaterThan(0);
    });
  });

  test('@regression should have at least 3 figures', async ({ hoversPage }) => {
    await test.step('Verify minimum figure count', async () => {
      const count = await hoversPage.getNumberOfFigures();
      expect(count).toBeGreaterThanOrEqual(3);
    });
  });
});
