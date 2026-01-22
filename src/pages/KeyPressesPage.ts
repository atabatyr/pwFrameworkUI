import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class KeyPressesPage extends BasePage {
  readonly inputField: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    super(page);
    this.inputField = page.locator('#target');
    this.resultText = page.locator('#result');
  }

  /**
   * Navigate to key presses page
   */
  async navigateToKeyPresses() {
    await this.goto('/key_presses');
  }

  /**
   * Press a key
   */
  async pressKey(key: string) {
    await this.inputField.focus();
    await this.page.keyboard.press(key);
  }

  /**
   * Get result message
   */
  async getResultMessage(): Promise<string> {
    return await this.resultText.textContent() || '';
  }
}
