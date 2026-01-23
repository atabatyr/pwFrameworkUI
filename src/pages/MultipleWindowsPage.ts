import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class MultipleWindowsPage extends BasePage {
  readonly newWindowLink: Locator;

  constructor(page: Page) {
    super(page);
    this.newWindowLink = page.getByRole('link', { name: 'Click Here' });
  }

  /**
   * Navigate to the multiple windows page
   */
  async navigateToMultipleWindows(): Promise<void> {
    await this.goto('/windows');
  }

  /**
   * Clicks the link and waits for a new window (tab) to open
   */
  async openNewWindow(): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.newWindowLink.click(),
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }

  /**
   * Returns the title of the current window
   */
  async getCurrentWindowTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Returns the URL of the current window
   */
  async getCurrentWindowURL(): Promise<string> {
    return this.page.url();
  }
}
