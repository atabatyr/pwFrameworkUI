import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddRemoveElementsPage extends BasePage {
  readonly addButton: Locator;
  readonly deleteButtons: Locator;
  readonly container: Locator;

  constructor(page: Page) {
    super(page);
    this.addButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteButtons = page.getByRole('button', { name: 'Delete' });
    this.container = page.locator('#elements');
  }

  /**
   * Navigate to add/remove elements page
   */
  async navigateToAddRemoveElements() {
    await this.goto('/add_remove_elements/');
  }

  /**
   * Click add button
   */
  async clickAddButton() {
    await this.addButton.click();
  }

  /**
   * Get delete button count
   */
  async getDeleteButtonCount(): Promise<number> {
    return await this.deleteButtons.count();
  }

  /**
   * Delete element by index
   */
  async deleteElementByIndex(index: number) {
    await this.deleteButtons.nth(index).click();
  }

  /**
   * Add multiple elements
   */
  async addMultipleElements(count: number) {
    for (let i = 0; i < count; i++) {
      await this.clickAddButton();
    }
  }
}
