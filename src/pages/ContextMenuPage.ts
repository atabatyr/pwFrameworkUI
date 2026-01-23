import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContextMenuPage extends BasePage {
  readonly boxElement: Locator;
  readonly header: Locator;

  constructor(page: Page) {
    super(page);
    this.boxElement = page.locator('#hot-spot');
    this.header = page.locator('h3');
  }

  /**
   * Navigate to context menu page
   */
  async navigateToContextMenu() {
    await this.goto('/context_menu');
  }

  /**
   * Right click on element
   */
  async rightClickOnBox() {
    await this.boxElement.click({ button: 'right' });
  }

  /**
   * Verify element exists
   */
  async isBoxVisible(): Promise<boolean> {
    return await this.boxElement.isVisible();
  }

  async waitForPageLoaded() {
    await this.header.waitFor({ state: 'visible' });
  }
}
