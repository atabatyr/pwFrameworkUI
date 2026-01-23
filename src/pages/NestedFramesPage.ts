import { Page, Frame } from '@playwright/test';

export class NestedFramesPage {
  constructor(public readonly page: Page) { }

  async navigateToNestedFrames() {
    await this.page.goto('https://the-internet.herokuapp.com/nested_frames');
  }

  getCurrentUrl(): string {
    return this.page.url();
  }

  async getAllFrames(): Promise<Frame[]> {
    return this.page.frames(); // includes main frame + all nested frames
  }

  async getFrameCount(): Promise<number> {
    const frames = await this.getAllFrames();
    return frames.length;
  }
}
