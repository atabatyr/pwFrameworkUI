import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FramesPage extends BasePage {
  readonly iframe: Locator;
  readonly frameContent: Locator;

  constructor(page: Page) {
    super(page);
    this.iframe = page.locator('iframe');
    this.frameContent = page.locator('body');
  }

  /**
   * Navigate to frames page
   */
  async navigateToFrames() {
    await this.goto('/iframe');
  }

  /**
   * Get iframe count
   */
  async getIframeCount(): Promise<number> {
    const iframes = await this.iframe.all();
    return iframes.length;
  }

  /**
   * Get frame titles
   */
  async getFrameTitles(): Promise<string[]> {
    const iframes = await this.iframe.all();
    const titles = [];
    for (const iframe of iframes) {
      const title = await iframe.getAttribute('src');
      if (title) titles.push(title);
    }
    return titles;
  }
}
