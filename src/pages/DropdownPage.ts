import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DropdownPage extends BasePage {
  readonly dropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.locator('#dropdown');
  }

  /**
   * Navigate to dropdown page
   */
  async navigateToDropdown() {
    await this.goto('/dropdown');
  }

  /**
   * Verify page is loaded
   */
  async verifyPageLoaded() {
    await this.dropdown.waitFor({ state: 'visible' });
  }

  /**
   * Select option by value
   */
  async selectOptionByValue(value: string) {
    await this.dropdown.selectOption(value);
  }

  /**
   * Select option by label
   */
  async selectOptionByLabel(label: string) {
    await this.dropdown.selectOption({ label });
  }

  /**
   * Get selected option value
   */
  async getSelectedValue(): Promise<string | null> {
    return await this.dropdown.inputValue();
  }

  /**
   * Get all available options
   */
  async getAvailableOptions(): Promise<string[]> {
    const options = await this.dropdown.locator('option').all();
    const labels = [];
    for (const option of options) {
      const text = await option.textContent();
      if (text) labels.push(text.trim());
    }
    return labels;
  }
}
