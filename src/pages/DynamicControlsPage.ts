import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicControlsPage extends BasePage {
  readonly addButton: Locator;
  readonly removeButton: Locator;
  readonly checkbox: Locator;
  readonly input: Locator;

  constructor(page: Page) {
    super(page);
    this.addButton = page.locator('button:has-text("Add")');
    this.removeButton = page.locator('button:has-text("Remove")');
    this.checkbox = page.locator('input[type="checkbox"]');
    this.input = page.locator('input[type="text"]');
  }

  async navigateToDynamicControls() {
    await this.goto('/dynamic_controls');
  }

  async clickAddButton() {
    await this.addButton.click();
  }

  async clickRemoveButton() {
    await this.removeButton.click();
  }

  async isCheckboxVisible(): Promise<boolean> {
    return await this.checkbox.isVisible();
  }

  async isInputVisible(): Promise<boolean> {
    return await this.input.isVisible();
  }
}
