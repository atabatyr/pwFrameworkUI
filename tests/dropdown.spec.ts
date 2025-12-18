import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Dropdown Tests', () => {
  test.beforeEach(async ({ dropdownPage }) => {
    await dropdownPage.navigateToDropdown();
  });

  test('should load dropdown page successfully', async ({ dropdownPage }) => {
    await test.step('Verify page is loaded', async () => {
      await dropdownPage.verifyPageLoaded();
    });
  });

  test('should display all available options', async ({ dropdownPage }) => {
    await test.step('Get all available options', async () => {
      const options = await dropdownPage.getAvailableOptions();
      expect(options.length).toBeGreaterThan(0);
    });
  });

  test('should select option by value', async ({ dropdownPage }) => {
    await test.step('Select option 1', async () => {
      await dropdownPage.selectOptionByValue('1');
    });

    await test.step('Verify option is selected', async () => {
      const selectedValue = await dropdownPage.getSelectedValue();
      expect(selectedValue).toBe('1');
    });
  });

  test('should select option by label', async ({ dropdownPage }) => {
    await test.step('Get available options', async () => {
      const options = await dropdownPage.getAvailableOptions();
      expect(options.length).toBeGreaterThan(1);
    });

    await test.step('Select option by label', async () => {
      const options = await dropdownPage.getAvailableOptions();
      if (options.length > 1) {
        await dropdownPage.selectOptionByLabel(options[1]);
      }
    });
  });

  test('should switch between different options', async ({ dropdownPage }) => {
    await test.step('Select option 1', async () => {
      await dropdownPage.selectOptionByValue('1');
      let selectedValue = await dropdownPage.getSelectedValue();
      expect(selectedValue).toBe('1');
    });

    await test.step('Select option 2', async () => {
      await dropdownPage.selectOptionByValue('2');
      let selectedValue = await dropdownPage.getSelectedValue();
      expect(selectedValue).toBe('2');
    });

    await test.step('Select option 1 again', async () => {
      await dropdownPage.selectOptionByValue('1');
      let selectedValue = await dropdownPage.getSelectedValue();
      expect(selectedValue).toBe('1');
    });
  });
});
