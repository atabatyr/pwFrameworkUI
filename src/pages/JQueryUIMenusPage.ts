import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class JQueryUIMenusPage extends BasePage {
  readonly enabledMenu: Locator;
  readonly menuItems: Locator;

  constructor(page: Page) {
    super(page);
    this.enabledMenu = page.locator('.ui-menu');
    this.menuItems = page.locator('.ui-menu-item');
  }

  async navigateToJQueryUIMenus() {
    await this.goto('/jqueryui/menu');
  }

  async isMenuDisplayed(): Promise<boolean> {
    return await this.enabledMenu.isVisible();
  }

  async getMenuItemCount(): Promise<number> {
    return await this.menuItems.count();
  }

  async clickMenuItem(text: string) {
    await this.page.locator(`text=${text}`).click();
  }
}
