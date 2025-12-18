import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ABTestingPage extends BasePage {
  readonly heading: Locator;
  readonly text: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h1');
    this.text = page.locator('.subheading');
  }

  async navigateToABTesting() {
    await this.goto('/abtest');
  }

  async getHeading(): Promise<string> {
    return await this.heading.textContent() || '';
  }

  async getText(): Promise<string> {
    return await this.text.textContent() || '';
  }
}
