import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShiftingContentPage extends BasePage {
  readonly menu: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    super(page);
    this.menu = page.locator('.menu');
    this.content = page.locator('#content');
  }

  async navigateToShiftingContent() {
    await this.goto('/shifting_content');
  }

  async isContentShifting(): Promise<boolean> {
    return await this.content.isVisible();
  }

  async reloadAndCheckLayout() {
    await this.page.reload();
    return await this.content.isVisible();
  }
}
