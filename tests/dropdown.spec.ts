import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Dropdown Tests @hello1', () => {

  test.beforeEach(async ({ dropdownPage }) => {
    await dropdownPage.navigateToDropdown();
    await dropdownPage.waitForPageLoaded(); // ✅ explicit readiness wait
  });

  test('should display all available options', async ({ dropdownPage }) => {
    await test.step('Verify available options', async () => {
      const options = await dropdownPage.getAvailableOptions();

      expect(options).toEqual([
        'Please select an option',
        'Option 1',
        'Option 2',
      ]);
    });
  });

  test('should select option by value', async ({ dropdownPage }) => {
    await test.step('Select Option 1 by value', async () => {
      await dropdownPage.selectByValue('1');
    });

    await test.step('Verify selected value and label', async () => {
      expect(await dropdownPage.getSelectedValue()).toBe('1');
      expect(await dropdownPage.getSelectedLabel()).toBe('Option 1');
    });
  });

  test('should select option by label', async ({ dropdownPage }) => {
    await test.step('Select Option 2 by label', async () => {
      await dropdownPage.selectByLabel('Option 2');
    });

    await test.step('Verify selected value and label', async () => {
      expect(await dropdownPage.getSelectedValue()).toBe('2');
      expect(await dropdownPage.getSelectedLabel()).toBe('Option 2');
    });
  });

  test('should switch between different options', async ({ dropdownPage }) => {
    await test.step('Select Option 1', async () => {
      await dropdownPage.selectByValue('1');
      expect(await dropdownPage.getSelectedValue()).toBe('1');
    });

    await test.step('Select Option 2', async () => {
      await dropdownPage.selectByValue('2');
      expect(await dropdownPage.getSelectedValue()).toBe('2');
    });

    await test.step('Select Option 1 again', async () => {
      await dropdownPage.selectByValue('1');
      expect(await dropdownPage.getSelectedValue()).toBe('1');
    });
  });

});
