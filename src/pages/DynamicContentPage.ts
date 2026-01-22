import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicContentPage extends BasePage {
  readonly contentArea: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    super(page);
    this.contentArea = page.locator('#content');
    this.content = page.locator('#content p');
  }

  /**
   * Navigate to dynamic content page
   */
  async navigateToDynamicContent() {
    await this.goto('/dynamic_content?with_content=');
  }

  /**
   * Get content text
   */
  async getContentText(): Promise<string> {
    try {
      await this.content.first().waitFor({ state: 'visible', timeout: 5000 });
      return await this.content.first().textContent() || '';
    } catch {
      return '';
    }
  }

  /**
   * Reload page and check if content changes
   */
  async reloadAndGetNewContent(): Promise<string> {
    await this.page.reload();
    try {
      await this.content.first().waitFor({ state: 'visible', timeout: 5000 });
      return await this.content.first().textContent() || '';
    } catch {
      return '';
    }
  }
}
