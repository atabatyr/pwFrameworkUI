import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class StatusCodesPage extends BasePage {
  readonly statusLink: (code: number) => Locator;
  readonly message: Locator;

  constructor(page: Page) {
    super(page);
    this.statusLink = (code: number) => page.locator(`a[href="status_codes/${code}"]`);
    this.message = page.locator('#content p');
  }

  async navigateToStatusCodes() {
    await this.goto('/status_codes');
  }

  async clickStatusCode(code: number) {
    await this.statusLink(code).click();
  }

  async getStatusMessage(): Promise<string> {
    return await this.message.textContent() || '';
  }
}
