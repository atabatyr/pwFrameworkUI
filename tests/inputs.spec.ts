import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Inputs Tests', () => {
  test.beforeEach(async ({ inputsPage }) => {
    await inputsPage.navigateToInputs();
  });

  test('should enter number in input field', async ({ inputsPage }) => {
    await test.step('Enter number and verify', async () => {
      await inputsPage.enterNumber('42');
      const value = await inputsPage.getNumberValue();
      expect(value).toBe('42');
    });
  });

  test('should clear number input', async ({ inputsPage }) => {
    await test.step('Enter and clear number', async () => {
      await inputsPage.enterNumber('100');
      await inputsPage.clearNumberInput();
      const value = await inputsPage.getNumberValue();
      expect(value).toBe('');
    });
  });

  test('should enter negative number', async ({ inputsPage }) => {
    await test.step('Enter negative number', async () => {
      await inputsPage.enterNumber('-50');
      const value = await inputsPage.getNumberValue();
      expect(value).toBe('-50');
    });
  });

  test('should have at least one input field', async ({ inputsPage }) => {
    await test.step('Verify input count', async () => {
      const count = await inputsPage.getInputCount();
      expect(count).toBeGreaterThan(0);
    });
  });
});
