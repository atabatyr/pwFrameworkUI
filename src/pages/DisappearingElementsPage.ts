import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DisappearingElementsPage extends BasePage {
  readonly menuItems: Locator;
  readonly header: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.locator('h3');
    this.menuItems = page.locator('ul li a');
  }

  async navigate() {
    await this.goto('/disappearing_elements');
  }

  async waitForPageLoaded() {
    await this.header.waitFor({ state: 'visible' });
  }

  async getMenuItemTexts(): Promise<string[]> {
    const count = await this.menuItems.count();
    const items: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await this.menuItems.nth(i).textContent();
      if (text) items.push(text.trim());
    }

    return items;
  }

  async isMenuItemPresent(name: string): Promise<boolean> {
    return (await this.menuItems.filter({ hasText: name }).count()) > 0;
  }
}
