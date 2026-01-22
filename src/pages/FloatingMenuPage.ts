import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FloatingMenuPage extends BasePage {
  readonly floatingMenu: Locator;
  readonly homeLink: Locator;

  constructor(page: Page) {
    super(page);
    this.floatingMenu = page.locator('#menu');
    this.homeLink = page.locator('#menu a:has-text("Home")');
  }

  async navigateToFloatingMenu() {
    await this.goto('/floating_menu');
  }

  async isMenuVisible(): Promise<boolean> {
    return await this.floatingMenu.isVisible();
  }

  async getMenuText(): Promise<string> {
    return await this.floatingMenu.textContent() || '';
  }
}
