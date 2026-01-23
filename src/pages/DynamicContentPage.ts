import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicContentPage extends BasePage {
  readonly header: Locator;
  readonly textBlocks: Locator;
  readonly images: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole('heading', { name: 'Dynamic Content' });
    this.textBlocks = page.locator('#content .row .large-10.columns');
    this.images = page.locator('.large-2.columns img');
  }

  /**
   * Navigate to dynamic content page (dynamic)
   */
  async navigate() {
    await this.goto('/dynamic_content');
  }

  /**
   * Navigate to static content version
   */
  async navigateWithStaticContent() {
    await this.goto('/dynamic_content?with_content=static');
  }

  /**
   * Wait until page is loaded
   */
  async waitForPageLoaded() {
    await this.header.waitFor({ state: 'visible' });
  }

  /**
   * Get all dynamic text blocks
   */
  async getAllTextContents(): Promise<string[]> {
    const texts: string[] = [];
    const count = await this.textBlocks.count();

    for (let i = 0; i < count; i++) {
      texts.push((await this.textBlocks.nth(i).innerText()).trim());
    }

    return texts;
  }

  /**
   * Reload page
   */
  async reloadPage() {
    await this.page.reload();
    await this.waitForPageLoaded();
  }
}
