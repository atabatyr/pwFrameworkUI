import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Inputs Page Tests @inputs @hello1', () => {

  test.beforeEach(async ({ inputsPage }) => {
    await inputsPage.navigate();
    await inputsPage.waitForPageLoaded();
  });

  test('@regression should accept numeric input', async ({ inputsPage }) => {
    await test.step('Type a number into input', async () => {
      await inputsPage.enterNumber(42);
    });

    await test.step('Verify the input value is correct', async () => {
      const value = await inputsPage.getInputValue();
      expect(value).toBe('42');
    });
  });

  test('@regression should allow negative numbers', async ({ inputsPage }) => {
    await inputsPage.enterNumber(-123);
    const value = await inputsPage.getInputValue();
    expect(value).toBe('-123');
  });
});
