import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class GeolocationPage extends BasePage {
  readonly whereAmIButton: Locator;
  readonly coordinatesText: Locator;

  constructor(page: Page) {
    super(page);
    this.whereAmIButton = page.locator('button:has-text("Where am I?")');
    this.coordinatesText = page.locator('#result');
  }

  async navigateToGeolocation() {
    await this.goto('/geolocation');
  }

  async clickWhereAmI() {
    await this.whereAmIButton.click();
  }

  async getCoordinates(): Promise<string> {
    return await this.coordinatesText.textContent() || '';
  }
}
