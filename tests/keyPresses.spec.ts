import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Key Presses Tests', () => {
  test.beforeEach(async ({ keyPressesPage }) => {
    await keyPressesPage.navigateToKeyPresses();
  });

  test('should detect key press', async ({ keyPressesPage }) => {
    await test.step('Press a key and verify result', async () => {
      await keyPressesPage.pressKey('a');
      const result = await keyPressesPage.getResultMessage();
      expect(result).toContain('You entered: A');
    });
  });

  test('should detect Enter key press', async ({ keyPressesPage }) => {
    await test.step('Press Enter and verify result', async () => {
      await keyPressesPage.pressKey('Enter');
      const result = await keyPressesPage.getResultMessage();
      expect(result.toUpperCase()).toContain('ENTER');
    });
  });

  test('should detect space key press', async ({ keyPressesPage }) => {
    await test.step('Press space and verify result', async () => {
      await keyPressesPage.pressKey(' ');
      const result = await keyPressesPage.getResultMessage();
      expect(result.toUpperCase()).toContain('SPACE');
    });
  });

  test('should detect Tab key press', async ({ keyPressesPage }) => {
    await test.step('Press Tab and verify result', async () => {
      await keyPressesPage.pressKey('Tab');
      const result = await keyPressesPage.getResultMessage();
      expect(result.toUpperCase()).toContain('TAB');
    });
  });
});
