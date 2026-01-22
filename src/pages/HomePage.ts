import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly pageHeading: Locator;
  readonly linkList: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.locator('h1');
    this.linkList = page.locator('a');
  }

  /**
   * Navigate to home page
   */
  async navigateToHome() {
    await this.goto('/');
  }

  /**
   * Get page heading
   */
  async getPageHeading(): Promise<string> {
    return await this.pageHeading.textContent() || '';
  }

  /**
   * Get all links on the page
   */
  async getAllLinks(): Promise<string[]> {
    const links = await this.linkList.all();
    const texts = [];
    for (const link of links) {
      const text = await link.textContent();
      if (text) texts.push(text.trim());
    }
    return texts;
  }

  /**
   * Click on a specific link by text
   */
  async clickLinkByText(text: string) {
    await this.page.locator(`a:has-text("${text}")`).click();
  }

  /**
   * Verify page is loaded
   */
  async verifyHomePageLoaded() {
    await this.pageHeading.waitFor({ state: 'visible' });
  }
}
