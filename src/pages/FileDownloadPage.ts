import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FileDownloadPage extends BasePage {
  readonly downloadLinks: Locator;

  constructor(page: Page) {
    super(page);
    this.downloadLinks = page.locator('a[href*="/download"]');
  }

  async navigateToFileDownload() {
    await this.goto('/download');
  }

  async getDownloadLinks() {
    return await this.downloadLinks.all();
  }

  async getDownloadLinkCount(): Promise<number> {
    return await this.downloadLinks.count();
  }
}
