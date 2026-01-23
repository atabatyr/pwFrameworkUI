import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicControlsPage extends BasePage {
  readonly header: Locator;

  // Remove/Add
  readonly removeButton: Locator;
  readonly checkbox: Locator;
  readonly message: Locator;

  // Enable/Disable
  readonly input: Locator;
  readonly enableButton: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole('heading', { name: 'Dynamic Controls' });

    this.removeButton = page.locator('#checkbox-example button');
    this.checkbox = page.locator('#checkbox');
    this.message = page.locator('#message');

    this.input = page.locator('#input-example input');
    this.enableButton = page.locator('#input-example button');
  }

  async navigate() {
    await this.goto('/dynamic_controls');
  }

  async waitForPageLoaded() {
    await this.header.waitFor({ state: 'visible' });
  }

  /* ---------- Remove / Add ---------- */

  async removeCheckbox() {
    await this.removeButton.click();
    await expect(this.message).toHaveText("It's gone!");
  }

  async addCheckbox() {
    await this.removeButton.click();
    await expect(this.message).toHaveText("It's back!");
  }

  async isCheckboxVisible(): Promise<boolean> {
    return await this.checkbox.isVisible();
  }

  /* ---------- Enable / Disable ---------- */

  async enableInput() {
    await this.enableButton.click();
    await expect(this.message).toHaveText("It's enabled!");
  }

  async disableInput() {
    await this.enableButton.click();
    await expect(this.message).toHaveText("It's disabled!");
  }

  async isInputEnabled(): Promise<boolean> {
    return await this.input.isEnabled();
  }
}
