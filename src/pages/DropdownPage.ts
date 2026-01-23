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
   * Wait until page is ready
   */
  async waitForPageLoaded() {
    await this.dropdown.waitFor({ state: 'visible' });
  }

  /**
   * Select option by value
   */
  async selectByValue(value: string) {
    await this.dropdown.selectOption(value);
  }

  /**
   * Select option by visible label
   */
  async selectByLabel(label: string) {
    await this.dropdown.selectOption({ label });
  }

  /**
   * Get selected option value
   */
  async getSelectedValue(): Promise<string> {
    return await this.dropdown.inputValue();
  }

  /**
   * Get selected option label
   */
  async getSelectedLabel(): Promise<string> {
    return (await this.dropdown.locator('option:checked').textContent())?.trim() ?? '';
  }

  /**
   * Get all available option labels
   */
  async getAvailableOptions(): Promise<string[]> {
    const options = this.dropdown.locator('option');
    const count = await options.count();
    const labels: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await options.nth(i).textContent();
      if (text) labels.push(text.trim());
    }

    return labels;
  }
}
