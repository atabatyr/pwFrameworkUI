import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Dynamic Loading Tests @hello1', () => {

  test('Example 1 – hidden element becomes visible', async ({ dynamicLoadingPage }) => {
    await dynamicLoadingPage.navigateToExample1();
    await dynamicLoadingPage.waitForPageLoaded();

    await test.step('Start loading', async () => {
      await dynamicLoadingPage.startLoading();
    });

    await test.step('Wait for loading to finish', async () => {
      await dynamicLoadingPage.waitForLoadingToFinish();
    });

    await test.step('Verify Hello World text', async () => {
      await dynamicLoadingPage.waitForHelloWorld();
      const text = await dynamicLoadingPage.getResultText();
      expect(text).toBe('Hello World!');
    });
  });

  test('Example 2 – element added to DOM after loading', async ({ dynamicLoadingPage }) => {
    await dynamicLoadingPage.navigateToExample2();
    await dynamicLoadingPage.waitForPageLoaded();

    await test.step('Start loading', async () => {
      await dynamicLoadingPage.startLoading();
    });

    await test.step('Wait for loading to finish', async () => {
      await dynamicLoadingPage.waitForLoadingToFinish();
    });

    await test.step('Verify Hello World text', async () => {
      await dynamicLoadingPage.waitForHelloWorld();
      const text = await dynamicLoadingPage.getResultText();
      expect(text).toBe('Hello World!');
    });
  });

});
