import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Add/Remove Elements Tests', () => {
  test.beforeEach(async ({ addRemoveElementsPage }) => {
    await addRemoveElementsPage.navigateToAddRemoveElements();
  });

  test('should add element successfully', async ({ addRemoveElementsPage }) => {
    await test.step('Add element and verify button appears', async () => {
      await addRemoveElementsPage.clickAddButton();
      const count = await addRemoveElementsPage.getDeleteButtonCount();
      expect(count).toBe(1);
    });
  });

  test('should add multiple elements', async ({ addRemoveElementsPage }) => {
    await test.step('Add multiple elements', async () => {
      await addRemoveElementsPage.addMultipleElements(3);
      const count = await addRemoveElementsPage.getDeleteButtonCount();
      expect(count).toBe(3);
    });
  });

  test('should delete element', async ({ addRemoveElementsPage }) => {
    await test.step('Add and delete element', async () => {
      await addRemoveElementsPage.clickAddButton();
      await addRemoveElementsPage.clickAddButton();
      let count = await addRemoveElementsPage.getDeleteButtonCount();
      expect(count).toBe(2);

      await addRemoveElementsPage.deleteElementByIndex(0);
      count = await addRemoveElementsPage.getDeleteButtonCount();
      expect(count).toBe(1);
    });
  });
});
