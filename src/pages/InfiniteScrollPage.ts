import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InfiniteScrollPage extends BasePage {
  readonly scrollElements: Locator;

  constructor(page: Page) {
    super(page);
    this.scrollElements = page.locator('.jscroll-inner p');
  }

  async navigateToInfiniteScroll() {
    await this.goto('/infinite_scroll');
  }

  async scrollToBottom() {
    await this.scrollElements.last().scrollIntoViewIfNeeded();
  }

  async getElementCount(): Promise<number> {
    return await this.scrollElements.count();
  }

  async getFirstElementText(): Promise<string> {
    return await this.scrollElements.first().textContent() || '';
  }
}
