import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class TyposPage extends BasePage {
  readonly content: Locator;
  readonly typosLink: Locator;

  constructor(page: Page) {
    super(page);
    this.content = page.locator('#content');
    this.typosLink = page.locator('a:has-text("Typos")');
  }

  async navigateToTypos() {
    await this.goto('/typos');
  }

  async getPageContent(): Promise<string> {
    return await this.content.textContent() || '';
  }

  async checkForTypos(): Promise<boolean> {
    const content = await this.getPageContent();
    return content.length > 0;
  }
}
