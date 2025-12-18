import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DragDropPage extends BasePage {
  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    super(page);
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }

  /**
   * Navigate to drag and drop page
   */
  async navigateToDragDrop() {
    await this.goto('/drag_and_drop');
  }

  /**
   * Drag column A to column B
   */
  async dragColumnAToB() {
    await this.columnA.dragTo(this.columnB);
  }

  /**
   * Get column A text
   */
  async getColumnAText(): Promise<string> {
    return await this.columnA.textContent() || '';
  }

  /**
   * Get column B text
   */
  async getColumnBText(): Promise<string> {
    return await this.columnB.textContent() || '';
  }
}
