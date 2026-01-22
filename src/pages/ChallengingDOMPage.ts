import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ChallengingDOMPage extends BasePage {
  readonly buttons: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    super(page);
    this.buttons = page.locator('button');
    this.content = page.locator('.large-and-deep-dom');
  }

  async navigateToChallenging() {
    await this.goto('/challenging_dom');
  }

  async getButtonCount(): Promise<number> {
    const buttons = await this.buttons.all();
    return buttons.length;
  }

  async clickButtonByText(text: string) {
    await this.page.locator(`button:has-text("${text}")`).click();
  }
}
