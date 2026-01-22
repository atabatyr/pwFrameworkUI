import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LargeDeepDOMPage extends BasePage {
  readonly bodyElement: Locator;
  readonly targetElement: Locator;

  constructor(page: Page) {
    super(page);
    this.bodyElement = page.locator('body');
    this.targetElement = page.locator('#sibling-0 #sibling-1 #sibling-2 #sibling-3 #sibling-4 #sibling-5');
  }

  async navigateToLargeDeepDOM() {
    await this.goto('/large');
  }

  async isPageLoaded(): Promise<boolean> {
    return await this.bodyElement.isVisible();
  }

  async findTargetElement(): Promise<boolean> {
    return await this.targetElement.isVisible();
  }
}
