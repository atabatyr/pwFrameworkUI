import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SlowResourcesPage extends BasePage {
  readonly content: Locator;

  constructor(page: Page) {
    super(page);
    this.content = page.locator('#content');
  }

  async navigateToSlowResources() {
    await this.goto('/slow');
  }

  async waitForContentToLoad() {
    await this.content.waitFor({ state: 'visible', timeout: 10000 });
  }

  async isContentVisible(): Promise<boolean> {
    return await this.content.isVisible();
  }
}
