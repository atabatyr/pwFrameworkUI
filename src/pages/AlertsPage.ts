import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AlertsPage extends BasePage {
  readonly jsAlertButton: Locator;
  readonly jsConfirmButton: Locator;
  readonly jsPromptButton: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    super(page);
    this.jsAlertButton = page.locator('button', { hasText: 'Click for JS Alert' });
    this.jsConfirmButton = page.locator('button', { hasText: 'Click for JS Confirm' });
    this.jsPromptButton = page.locator('button', { hasText: 'Click for JS Prompt' });
    this.resultText = page.locator('#result');
  }

  /**
   * Navigate to alerts page
   */
  async navigateToAlerts() {
    await this.goto('/javascript_alerts');
  }

  /**
   * Trigger JS alert
   */
  async triggerAlert() {
    this.page.once('dialog', dialog => {
      dialog.accept();
    });
    await this.jsAlertButton.click();
  }

  /**
   * Trigger JS confirm and accept
   */
  async triggerConfirmAndAccept() {
    this.page.once('dialog', dialog => {
      dialog.accept();
    });
    await this.jsConfirmButton.click();
  }

  /**
   * Trigger JS confirm and dismiss
   */
  async triggerConfirmAndDismiss() {
    this.page.once('dialog', dialog => {
      dialog.dismiss();
    });
    await this.jsConfirmButton.click();
  }

  /**
   * Trigger JS prompt with text
   */
  async triggerPromptWithText(text: string) {
    this.page.once('dialog', dialog => {
      dialog.accept(text);
    });
    await this.jsPromptButton.click();
  }

  /**
   * Get result message
   */
  async getResultMessage(): Promise<string> {
    await this.resultText.waitFor({ state: 'visible' });
    return await this.resultText.textContent() || '';
  }
}
