import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BrokenImagesPage extends BasePage {
  readonly images: Locator;

  constructor(page: Page) {
    super(page);
    this.images = page.locator('img');
  }

  /**
   * Navigate to broken images page
   */
  async navigateToBrokenImages() {
    await this.goto('/broken_images');
  }

  /**
   * Get image count
   */
  async getImageCount(): Promise<number> {
    const images = await this.images.all();
    return images.length;
  }

  /**
   * Get all image src attributes
   */
  async getImageSources(): Promise<string[]> {
    const images = await this.images.all();
    const sources = [];
    for (const img of images) {
      const src = await img.getAttribute('src');
      if (src) sources.push(src);
    }
    return sources;
  }

  /**
   * Check if image is loaded by index
   */
  async isImageLoaded(index: number): Promise<boolean> {
    const images = await this.images.all();
    if (images.length > index) {
      // Try to check if image has complete property
      return await images[index].evaluate((img: HTMLImageElement) => img.complete && img.naturalHeight !== 0);
    }
    return false;
  }

  /**
   * Get all image loading statuses
   */
  async getImageLoadingStatuses(): Promise<boolean[]> {
    const images = await this.images.all();
    const statuses = [];
    for (let i = 0; i < images.length; i++) {
      const loaded = await this.isImageLoaded(i);
      statuses.push(loaded);
    }
    return statuses;
  }
}
