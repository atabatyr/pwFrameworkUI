import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShadowDOMPage extends BasePage {
  readonly hostElement: Locator;

  constructor(page: Page) {
    super(page);
    this.hostElement = page.locator('my-shadow-dom');
  }

  async navigateToShadowDOM() {
    await this.goto('/shadow_dom');
  }

  async isHostElementVisible(): Promise<boolean> {
    return await this.hostElement.isVisible();
  }

  async getShadowDOMContent(): Promise<string> {
    return await this.page.evaluate(() => {
      const host = document.querySelector('my-shadow-dom');
      if (host && host.shadowRoot) {
        return host.shadowRoot.textContent || '';
      }
      return '';
    });
  }
}
