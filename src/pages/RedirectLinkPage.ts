import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class RedirectLinkPage extends BasePage {
  readonly redirectLink: Locator;

  constructor(page: Page) {
    super(page);
    this.redirectLink = page.getByRole('link', { name: 'here' })
  }

  async navigateToRedirectLink() {
    await this.goto('/redirector');
  }

  async clickRedirectLink() {
    await this.redirectLink.click();
    await this.page.waitForLoadState('load');
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }
}
