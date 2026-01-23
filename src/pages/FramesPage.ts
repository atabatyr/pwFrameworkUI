import { Page, Locator } from '@playwright/test';

export class FramesPage {
  readonly nestedFramesLink: Locator;
  readonly iFrameLink: Locator;

  constructor(private readonly page: Page) {
    this.nestedFramesLink = page.getByRole('link', { name: 'Nested Frames' });
    this.iFrameLink = page.getByRole('link', { name: 'iFrame' });
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/frames');
  }

  async clickNestedFrames() {
    await this.nestedFramesLink.click();
  }

  async clickIFrame() {
    await this.iFrameLink.click();
  }

  async waitForPageLoaded() {
    await this.nestedFramesLink.waitFor({ state: 'visible' });
  }
}
