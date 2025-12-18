import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HorizontalSliderPage extends BasePage {
  readonly slider: Locator;
  readonly sliderValue: Locator;

  constructor(page: Page) {
    super(page);
    this.slider = page.locator('input[type="range"]');
    this.sliderValue = page.locator('#range');
  }

  async navigateToHorizontalSlider() {
    await this.goto('/horizontal_slider');
  }

  async setSliderValue(value: number) {
    await this.slider.evaluate((el: HTMLInputElement) => {
      el.value = value.toString();
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }

  async getSliderValue(): Promise<string> {
    return await this.sliderValue.textContent() || '';
  }
}
