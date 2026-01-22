import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Checkbox Tests', () => {
  test.beforeEach(async ({ checkboxPage }) => {
    await checkboxPage.navigateToCheckboxes();
  });

  test('should load checkbox page successfully', async ({ checkboxPage }) => {
    await test.step('Verify page is loaded', async () => {
      await checkboxPage.verifyPageLoaded();
    });

    await test.step('Verify checkbox count', async () => {
      const count = await checkboxPage.getCheckboxCount();
      expect(count).toBeGreaterThan(0);
    });
  });

  test('should check a checkbox', async ({ checkboxPage }) => {
    await test.step('Check first checkbox', async () => {
      await checkboxPage.checkCheckbox(0);
    });

    await test.step('Verify first checkbox is checked', async () => {
      const isChecked = await checkboxPage.isCheckboxChecked(0);
      expect(isChecked).toBeTruthy();
    });
  });

  test('should uncheck a checkbox', async ({ checkboxPage }) => {
    await test.step('Check first checkbox', async () => {
      await checkboxPage.checkCheckbox(0);
    });

    await test.step('Uncheck first checkbox', async () => {
      await checkboxPage.uncheckCheckbox(0);
    });

    await test.step('Verify first checkbox is unchecked', async () => {
      const isChecked = await checkboxPage.isCheckboxChecked(0);
      expect(isChecked).toBeFalsy();
    });
  });

  test('should toggle multiple checkboxes', async ({ checkboxPage }) => {
    await test.step('Check multiple checkboxes', async () => {
      await checkboxPage.checkCheckbox(0);
      await checkboxPage.checkCheckbox(1);
    });

    await test.step('Verify all checked states', async () => {
      const states = await checkboxPage.getAllCheckboxStates();
      expect(states[0]).toBeTruthy();
      expect(states[1]).toBeTruthy();
    });
  });

  test('should uncheck and recheck checkboxes', async ({ checkboxPage }) => {
    await test.step('Check all checkboxes', async () => {
      const count = await checkboxPage.getCheckboxCount();
      for (let i = 0; i < count; i++) {
        await checkboxPage.checkCheckbox(i);
      }
    });

    await test.step('Verify all checked', async () => {
      const states = await checkboxPage.getAllCheckboxStates();
      states.forEach(state => {
        expect(state).toBeTruthy();
      });
    });

    await test.step('Uncheck all checkboxes', async () => {
      const count = await checkboxPage.getCheckboxCount();
      for (let i = 0; i < count; i++) {
        await checkboxPage.uncheckCheckbox(i);
      }
    });

    await test.step('Verify all unchecked', async () => {
      const states = await checkboxPage.getAllCheckboxStates();
      states.forEach(state => {
        expect(state).toBeFalsy();
      });
    });
  });
});
