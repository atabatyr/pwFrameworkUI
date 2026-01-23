import { Page, Locator } from '@playwright/test';

export class HoversPage {
  readonly avatars: Locator;
  readonly captions: Locator;

  constructor(private readonly page: Page) {
    this.avatars = page.locator('.figure');
    this.captions = page.locator('.figcaption');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/hovers');
  }

  async waitForPageLoaded() {
    await this.avatars.first().waitFor({ state: 'visible' });
  }

  async hoverOverAvatar(index: number) {
    await this.avatars.nth(index).hover();
  }

  async getCaptionText(index: number): Promise<string> {
    return this.captions.nth(index).innerText();
  }

  async getProfileLink(index: number): Promise<string | null> {
    return this.captions.nth(index).locator('a').getAttribute('href');
  }
}
