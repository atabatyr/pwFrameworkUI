import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DigestAuthPage extends BasePage {
  readonly content: Locator;

  constructor(page: Page) {
    super(page);
    this.content = page.locator('body');
  }

  async navigateToDigestAuth(username: string, password: string) {
    const url = `https://${username}:${password}@the-internet.herokuapp.com/digest_auth`;
    await this.page.goto(url);
  }

  async verifyAuthSuccess(): Promise<string> {
    return await this.content.textContent() || '';
  }
}
