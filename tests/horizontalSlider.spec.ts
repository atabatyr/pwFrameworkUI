import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Horizontal Slider Tests', () => {
  test('should navigate to horizontal slider page', async ({page, horizontalSliderPage }) => {
    await horizontalSliderPage.navigateToHorizontalSlider();
    expect(page.url()).toContain('/horizontal_slider');
  });

  test('should adjust slider', async ({ horizontalSliderPage }) => {
    await horizontalSliderPage.navigateToHorizontalSlider();
    await horizontalSliderPage.setSliderValue(5);
    const value = await horizontalSliderPage.getSliderValue();
    expect(value.length).toBeGreaterThan(0);
  });
});
