import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NestedFramesPage extends BasePage {
  readonly iframes: Locator;

  constructor(page: Page) {
    super(page);
    this.iframes = page.locator('iframe');
  }

  async navigateToNestedFrames() {
    await this.goto('/nested_frames');
  }

  async getIframeCount(): Promise<number> {
    return this.page.frames().length - 1; // Subtract 1 for the main frame
  }

  async getTopFrameText(): Promise<string> {
    const frame = this.page.frameLocator('iframe[name="frame-top"]');
    return await frame.locator('body').textContent() || '';
  }
}
