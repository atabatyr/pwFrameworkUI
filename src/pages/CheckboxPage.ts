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
    return await this.checkboxes.count();
  }

  /**
   * Check a specific checkbox by index
   */
  async checkCheckbox(index: number) {
    await this.checkboxes.nth(index).check();
  }

  /**
   * Uncheck a specific checkbox by index
   */
  async uncheckCheckbox(index: number) {
    await this.checkboxes.nth(index).uncheck();
  }

  /**
   * Get checkbox checked status by index
   */
  async isCheckboxChecked(index: number): Promise<boolean> {
    return await this.checkboxes.nth(index).isChecked();
  }

  /**
   * Get all checkbox states
   */
  async getAllCheckboxStates(): Promise<boolean[]> {
    const count = await this.checkboxes.count();
    const states: boolean[] = [];

    for (let i = 0; i < count; i++) {
      states.push(await this.isCheckboxChecked(i));
    }

    return states;
  }


  async checkAllCheckboxes() {
    const count = await this.checkboxes.count();
    for (let i = 0; i < count; i++) {
      await this.checkCheckbox(i);
    }
  }

  async unCheckAllCheckboxes() {
    const count = await this.checkboxes.count();
    for (let i = 0; i < count; i++) {
      await this.uncheckCheckbox(i);
    }
  }
}
