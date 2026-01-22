import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HoversPage extends BasePage {
  readonly figures: Locator;
  readonly captionText: Locator;

  constructor(page: Page) {
    super(page);
    this.figures = page.locator('.figure');
    this.captionText = page.locator('.figcaption');
  }

  /**
   * Navigate to hovers page
   */
  async navigateToHovers() {
    await this.goto('/hovers');
  }

  /**
   * Get number of figures
   */
  async getNumberOfFigures(): Promise<number> {
    const figures = await this.figures.all();
    return figures.length;
  }

  /**
   * Hover over figure by index
   */
  async hoverOverFigure(index: number) {
    const figures = await this.figures.all();
    if (figures.length > index) {
      await figures[index].hover();
    }
  }

  /**
   * Check if caption is visible after hover
   */
  async isCaptionVisible(): Promise<boolean> {
    return await this.captionText.first().isVisible();
  }

  /**
   * Get caption text for figure by index
   */
  async getCaptionTextForFigure(index: number): Promise<string> {
    const figures = await this.figures.all();
    if (figures.length > index) {
      const caption = figures[index].locator('.figcaption');
      return await caption.textContent() || '';
    }
    return '';
  }
}
