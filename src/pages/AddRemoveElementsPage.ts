import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddRemoveElementsPage extends BasePage {
  readonly addButton: Locator;
  readonly deleteButtons: Locator;
  readonly container: Locator;

  constructor(page: Page) {
    super(page);
    this.addButton = page.locator('button:has-text("Add Element")');
    this.deleteButtons = page.locator('button:has-text("Delete")');
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
    const buttons = await this.deleteButtons.all();
    return buttons.length;
  }

  /**
   * Delete element by index
   */
  async deleteElementByIndex(index: number) {
    const buttons = await this.deleteButtons.all();
    if (buttons.length > index) {
      await buttons[index].click();
    }
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
