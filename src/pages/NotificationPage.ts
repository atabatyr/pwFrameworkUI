import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NotificationPage extends BasePage {
  readonly notificationLink: Locator;
  readonly notification: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.notificationLink = page.locator('a[href*="notification"]');
    this.notification = page.locator('#flash');
    this.closeButton = page.locator('#flash .close');
  }

  /**
   * Navigate to notification page
   */
  async navigateToNotification() {
    await this.goto('/notification_message');
  }

  /**
   * Click notification link to trigger message
   */
  async clickNotificationLink() {
    await this.notificationLink.click();
  }

  /**
   * Get notification message
   */
  async getNotificationMessage(): Promise<string> {
    await this.notification.waitFor({ state: 'visible' });
    return await this.notification.textContent() || '';
  }

  /**
   * Check if notification is visible
   */
  async isNotificationVisible(): Promise<boolean> {
    return await this.notification.isVisible();
  }

  /**
   * Close notification
   */
  async closeNotification() {
    await this.closeButton.click();
  }
}
