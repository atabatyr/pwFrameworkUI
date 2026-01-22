import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ExitIntentPage extends BasePage {
  readonly modal: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.modal = page.locator('.modal');
    this.closeButton = page.locator('button:has-text("Close")');
  }

  async navigateToExitIntent() {
    await this.goto('/exit_intent');
  }

  async isModalDisplayed(): Promise<boolean> {
    return await this.modal.isVisible();
  }

  async closeModal() {
    await this.closeButton.click();
  }
}
