import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DisappearingElementsPage extends BasePage {
  readonly elements: Locator;

  constructor(page: Page) {
    super(page);
    this.elements = page.locator('a');
  }

  /**
   * Navigate to disappearing elements page
   */
  async navigateToDisappearingElements() {
    await this.goto('/disappearing_elements');
  }

  /**
   * Get initial element count
   */
  async getElementCount(): Promise<number> {
    const elements = await this.elements.all();
    return elements.length;
  }

  /**
   * Reload and check if elements count changes
   */
  async reloadAndGetElementCount(): Promise<number> {
    await this.page.reload();
    await this.page.waitForLoadState('networkidle');
    const elements = await this.elements.all();
    return elements.length;
  }

  /**
   * Get all element texts
   */
  async getElementTexts(): Promise<string[]> {
    const elements = await this.elements.all();
    const texts = [];
    for (const elem of elements) {
      const text = await elem.textContent();
      if (text) texts.push(text.trim());
    }
    return texts;
  }
}
