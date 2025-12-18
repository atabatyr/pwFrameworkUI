import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InputsPage extends BasePage {
  readonly numberInput: Locator;
  readonly textInput: Locator;
  readonly inputs: Locator;

  constructor(page: Page) {
    super(page);
    this.numberInput = page.locator('input[type="number"]');
    this.textInput = page.locator('input[type="text"]');
    this.inputs = page.locator('input');
  }

  /**
   * Navigate to inputs page
   */
  async navigateToInputs() {
    await this.goto('/inputs');
  }

  /**
   * Enter number value
   */
  async enterNumber(value: string) {
    await this.numberInput.fill(value);
  }

  /**
   * Get number value
   */
  async getNumberValue(): Promise<string> {
    return await this.numberInput.inputValue();
  }

  /**
   * Clear number input
   */
  async clearNumberInput() {
    await this.numberInput.clear();
  }

  /**
   * Get all input elements
   */
  async getInputCount(): Promise<number> {
    const inputs = await this.inputs.all();
    return inputs.length;
  }
}
