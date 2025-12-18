import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckboxPage extends BasePage {
  readonly checkboxes: Locator;

  constructor(page: Page) {
    super(page);
    this.checkboxes = page.locator('input[type="checkbox"]');
  }

  /**
   * Navigate to checkboxes page
   */
  async navigateToCheckboxes() {
    await this.goto('/checkboxes');
  }

  /**
   * Verify page is loaded
   */
  async verifyPageLoaded() {
    await this.checkboxes.first().waitFor({ state: 'visible' });
  }

  /**
   * Get checkbox count
   */
  async getCheckboxCount(): Promise<number> {
    const checkboxes = await this.checkboxes.all();
    return checkboxes.length;
  }

  /**
   * Check a specific checkbox by index
   */
  async checkCheckbox(index: number) {
    const checkboxes = await this.checkboxes.all();
    if (checkboxes.length > index) {
      await checkboxes[index].check();
    }
  }

  /**
   * Uncheck a specific checkbox by index
   */
  async uncheckCheckbox(index: number) {
    const checkboxes = await this.checkboxes.all();
    if (checkboxes.length > index) {
      await checkboxes[index].uncheck();
    }
  }

  /**
   * Get checkbox checked status by index
   */
  async isCheckboxChecked(index: number): Promise<boolean> {
    const checkboxes = await this.checkboxes.all();
    if (checkboxes.length > index) {
      return await checkboxes[index].isChecked();
    }
    return false;
  }

  /**
   * Get all checkbox states
   */
  async getAllCheckboxStates(): Promise<boolean[]> {
    const checkboxes = await this.checkboxes.all();
    const states = [];
    for (const checkbox of checkboxes) {
      states.push(await checkbox.isChecked());
    }
    return states;
  }
}
