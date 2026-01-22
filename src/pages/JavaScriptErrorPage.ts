import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class JavaScriptErrorPage extends BasePage {
  readonly errorText: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    super(page);
    this.errorText = page.locator('.page-title');
    this.content = page.locator('#content');
  }

  async navigateToJavaScriptError() {
    await this.goto('/javascript_error');
  }

  async isPageLoaded(): Promise<boolean> {
    return await this.content.isVisible();
  }

  async getPageTitle(): Promise<string> {
    return await this.errorText.textContent() || '';
  }
}
