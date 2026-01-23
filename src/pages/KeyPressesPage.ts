import { Page, Locator } from '@playwright/test';

export class KeyPressesPage {
  readonly inputField: Locator;
  readonly resultMessage: Locator;

  constructor(private readonly page: Page) {
    this.inputField = page.locator('#target');
    this.resultMessage = page.locator('#result');
  }

  async navigateToKeyPresses() {
    await this.page.goto('https://the-internet.herokuapp.com/key_presses');
  }

  async pressKey(key: string) {
    await this.inputField.focus();
    await this.page.keyboard.press(key);
  }

  async getResultMessage(): Promise<string> {
    return (await this.resultMessage.textContent()) ?? '';
  }
}
