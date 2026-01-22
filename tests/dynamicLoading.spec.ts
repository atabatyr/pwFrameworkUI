import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Dynamic Loading Tests', () => {
  test('should load content from example 1', async ({ dynamicLoadingPage }) => {
    await test.step('Navigate to example 1', async () => {
      await dynamicLoadingPage.navigateToExample1();
    });

    await test.step('Start loading', async () => {
      await dynamicLoadingPage.clickStart();
      await dynamicLoadingPage.waitForLoadingComplete();
      const result = await dynamicLoadingPage.getResultText();
      expect(result).toContain('Hello World');
    });
  });

  test('should load content from example 2', async ({ dynamicLoadingPage }) => {
    await test.step('Navigate to example 2', async () => {
      await dynamicLoadingPage.navigateToExample2();
    });

    await test.step('Start loading', async () => {
      await dynamicLoadingPage.clickStart();
      await dynamicLoadingPage.waitForLoadingComplete();
      const result = await dynamicLoadingPage.getResultText();
      expect(result).toContain('Hello World');
    });
  });
});
