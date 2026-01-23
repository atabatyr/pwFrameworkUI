import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Drag and Drop Tests @hello1', () => {

  test.beforeEach(async ({ dragDropPage }) => {
    await dragDropPage.navigateToDragDrop();
    await dragDropPage.waitForPageLoaded(); // ✅ explicit waitFor usage
  });

  test('should perform drag and drop from A to B', async ({ dragDropPage }) => {

    await test.step('Verify initial state', async () => {
      expect(await dragDropPage.doesColumnAContain('A')).toBe(true);
      expect(await dragDropPage.doesColumnBContain('B')).toBe(true);
    });

    await test.step('Drag column A to column B', async () => {
      await dragDropPage.dragColumnAToB();
    });

    await test.step('Verify columns are swapped', async () => {
      expect(await dragDropPage.doesColumnAContain('B')).toBe(true);
      expect(await dragDropPage.doesColumnBContain('A')).toBe(true);
    });
  });

  test('should drag back from B to A', async ({ dragDropPage }) => {

    await test.step('Ensure swapped state first', async () => {
      await dragDropPage.dragColumnAToB();
    });

    await test.step('Drag column B back to column A', async () => {
      await dragDropPage.dragColumnBToA();
    });

    await test.step('Verify original positions restored', async () => {
      expect(await dragDropPage.doesColumnAContain('A')).toBe(true);
      expect(await dragDropPage.doesColumnBContain('B')).toBe(true);
    });
  });

  test('should maintain correct state after page reload', async ({ dragDropPage }) => {

    await test.step('Perform drag and drop', async () => {
      await dragDropPage.dragColumnAToB();
    });

    await test.step('Reload page', async () => {
      await dragDropPage.reloadPage();
    });

    await test.step('Verify default state after reload', async () => {
      expect(await dragDropPage.doesColumnAContain('A')).toBe(true);
      expect(await dragDropPage.doesColumnBContain('B')).toBe(true);
    });
  });

});
