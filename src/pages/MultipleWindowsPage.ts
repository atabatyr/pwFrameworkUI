import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class MultipleWindowsPage extends BasePage {
  readonly newWindowLink: Locator;

  constructor(page: Page) {
    super(page);
    this.newWindowLink = page.locator('a', { hasText: 'Click Here' });
  }

  /**
   * Navigate to multiple windows page
   */
  async navigateToMultipleWindows() {
    await this.goto('/windows');
  }

  /**
   * Open new window
   */
  async openNewWindow() {
    const [popup] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.newWindowLink.click()
    ]);
    return popup;
  }

  /**
   * Verify current window title
   */
  async getCurrentWindowTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Get current window URL
   */
  async getCurrentWindowURL(): Promise<string> {
    return this.page.url();
  }
}
