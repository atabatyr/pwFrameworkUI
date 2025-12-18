import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class StatusCodesPage extends BasePage {
  readonly statusLinks: Locator;
  readonly pageContent: Locator;

  constructor(page: Page) {
    super(page);
    this.statusLinks = page.locator('a');
    this.pageContent = page.locator('body');
  }

  /**
   * Navigate to status codes page
   */
  async navigateToStatusCodes() {
    await this.goto('/status_codes');
  }

  /**
   * Click on a status code link
   */
  async clickStatusCodeLink(text: string) {
    const link = this.page.locator(`a:has-text("${text}")`);
    await link.click();
  }

  /**
   * Get page content
   */
  async getPageContent(): Promise<string> {
    return await this.pageContent.textContent() || '';
  }

  /**
   * Check status code page
   */
  async checkStatusCode(code: string): Promise<boolean> {
    await this.clickStatusCodeLink(code);
    const content = await this.getPageContent();
    return content.includes(code);
  }
}
