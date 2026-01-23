import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DragDropPage extends BasePage {
  readonly header: Locator;
  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole('heading', { name: 'Drag and Drop' });
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }

  /**
   * Navigate to Drag and Drop page
   */
  async navigateToDragDrop() {
    await this.goto('/drag_and_drop');
  }

  /**
   * Wait until page is ready
   */
  async waitForPageLoaded() {
    await this.header.waitFor({ state: 'visible' });
  }

  /**
   * Drag column A onto column B
   */
  async dragColumnAToB() {
    await this.columnA.dragTo(this.columnB);
  }

  /**
   * Drag column B onto column A (reverse action)
   */
  async dragColumnBToA() {
    await this.columnB.dragTo(this.columnA);
  }

  /**
   * Get visible text of column A
   */
  async getColumnAText(): Promise<string> {
    return (await this.columnA.textContent())?.trim() ?? '';
  }

  /**
   * Get visible text of column B
   */
  async getColumnBText(): Promise<string> {
    return (await this.columnB.textContent())?.trim() ?? '';
  }

  /**
   * Check if column A currently contains a specific value
   */
  async doesColumnAContain(text: string): Promise<boolean> {
    const content = await this.getColumnAText();
    return content.includes(text);
  }

  /**
   * Check if column B currently contains a specific value
   */
  async doesColumnBContain(text: string): Promise<boolean> {
    const content = await this.getColumnBText();
    return content.includes(text);
  }

  /**
   * Reload the page and wait until it is ready again
   */
  async reloadPage() {
    await this.page.reload();
    await this.waitForPageLoaded();
  }
}
