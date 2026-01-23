import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NotificationPage extends BasePage {
  readonly messageLink: Locator;
  readonly flashMessage: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.messageLink = page.getByRole('link', { name: 'Click here' });
    this.flashMessage = page.locator('#flash');
    this.closeButton = this.flashMessage.getByRole('button', { name: '×' });
  }

  /**
   * Navigate to the notification message page
   */
  async navigate() {
    await this.goto('/notification_message_rendered');
  }

  /**
   * Click the "Click here" link to trigger a new message
   */
  async clickMessageLink() {
    await this.messageLink.click();
  }

  /**
   * Wait for the flash message to be visible
   */
  async waitForFlashVisible() {
    await this.flashMessage.waitFor({ state: 'visible' });
  }

  /**
   * Get the current flash message text (trimmed)
   */
  async getFlashMessage(): Promise<string> {
    return (await this.flashMessage.textContent())?.trim() || '';
  }

  /**
   * Close the flash message (click the × button)
   */
  async closeFlashMessage() {
    if (await this.closeButton.isVisible()) {
      await this.closeButton.click();
    }
  }
}
