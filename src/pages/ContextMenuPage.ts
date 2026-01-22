import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContextMenuPage extends BasePage {
  readonly boxElement: Locator;

  constructor(page: Page) {
    super(page);
    this.boxElement = page.locator('#hot-spot');
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
    const [dialog] = await Promise.all([
      this.page.waitForEvent('dialog'),
      this.boxElement.click({ button: 'right' })
    ]);
    return dialog;
  }

  /**
   * Verify element exists
   */
  async isBoxVisible(): Promise<boolean> {
    return await this.boxElement.isVisible();
  }
}
