import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class EntryAdPage extends BasePage {
  readonly modal: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.modal = page.locator('.modal');
    this.closeButton = page.locator('button:has-text("Close")');
  }

  async navigateToEntryAd() {
    await this.goto('/entry_ad');
  }

  async isModalDisplayed(): Promise<boolean> {
    try {
      await this.modal.waitFor({ state: 'visible', timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  }

  async closeModal() {
    await this.closeButton.click();
  }
}
