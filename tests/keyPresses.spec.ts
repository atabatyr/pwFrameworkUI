import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Key Presses Tests @key @hello1', () => {
  test.beforeEach(async ({ keyPressesPage }) => {
    await keyPressesPage.navigateToKeyPresses();
  });

  const keys = [
    { key: 'a', expected: 'A' },
    { key: 'z', expected: 'Z' },
    { key: '1', expected: '1' },
    { key: '9', expected: '9' },
    { key: 'Enter', expected: 'ENTER' },
    { key: 'Escape', expected: 'ESCAPE' },
    { key: 'Tab', expected: 'TAB' },
    { key: ' ', expected: 'SPACE' },
    { key: 'Shift', expected: 'SHIFT' },
    { key: 'Control', expected: 'CONTROL' },
    { key: 'Alt', expected: 'ALT' },
    { key: 'ArrowUp', expected: 'UP' },
    { key: 'ArrowDown', expected: 'DOWN' },
    { key: 'F1', expected: 'F1' },
    { key: 'F12', expected: 'F12' }
  ];

  for (const { key, expected } of keys) {
    test(`should detect key press: ${expected}`, async ({ keyPressesPage }) => {
      await test.step(`Press "${key}" and verify result`, async () => {
        await keyPressesPage.pressKey(key);
        const result = await keyPressesPage.getResultMessage();
        expect(result.toUpperCase()).toContain(expected);
      });
    });
  }
});
