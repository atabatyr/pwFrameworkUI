import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BasicAuthPage extends BasePage {
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.successMessage = page.locator('p');
  }

  /**
   * Navigate to basic auth page with credentials
   */
  async navigateToBasicAuth(username: string, password: string) {
    const credentials = Buffer.from(`${username}:${password}`).toString('base64');
    const url = `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`;
    await this.page.goto(url);
  }

  /**
   * Verify authentication success
   */
  async verifyAuthSuccess(): Promise<string> {
    await this.successMessage.waitFor({ state: 'visible' });
    return await this.successMessage.textContent() || '';
  }

  /**
   * Get success message text
   */
  async getSuccessMessage(): Promise<string> {
    return await this.successMessage.textContent() || '';
  }

  /**
   * Check if success message is displayed
   */
  async isSuccessMessageDisplayed(): Promise<boolean> {
    return await this.successMessage.isVisible();
  }
}
