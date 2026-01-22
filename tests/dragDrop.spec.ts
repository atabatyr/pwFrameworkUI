import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Drag and Drop Tests', () => {
  test.beforeEach(async ({ dragDropPage }) => {
    await dragDropPage.navigateToDragDrop();
  });

  test('should perform drag and drop', async ({ dragDropPage }) => {
    await test.step('Get initial positions', async () => {
      const columnABefore = await dragDropPage.getColumnAText();
      const columnBBefore = await dragDropPage.getColumnBText();
      expect(columnABefore).toContain('A');
      expect(columnBBefore).toContain('B');
    });

    await test.step('Perform drag and drop', async () => {
      await dragDropPage.dragColumnAToB();
    });

    await test.step('Verify columns are swapped', async () => {
      const columnAAfter = await dragDropPage.getColumnAText();
      const columnBAfter = await dragDropPage.getColumnBText();
      expect(columnAAfter).toContain('B');
      expect(columnBAfter).toContain('A');
    });
  });
});
