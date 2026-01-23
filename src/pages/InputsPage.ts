import { Locator, Page } from '@playwright/test';

export class InputsPage {
  readonly numberInput: Locator;

  constructor(private readonly page: Page) {
    this.numberInput = page.locator('input[type="number"]');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/inputs');
  }

  async waitForPageLoaded() {
    await this.numberInput.waitFor({ state: 'visible' });
  }

  async enterNumber(value: number) {
    await this.numberInput.fill(''); // clear first
    await this.numberInput.type(value.toString());
  }

  async getInputValue(): Promise<string> {
    return await this.numberInput.inputValue();
  }
}
