import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SecureFileDownloadPage extends BasePage {
  readonly downloadLinks: Locator;

  constructor(page: Page) {
    super(page);
    this.downloadLinks = page.locator('a[href*="/download_secure"]');
  }

  async navigateToSecureFileDownload() {
    await this.goto('/download_secure');
  }

  async getDownloadLinks() {
    return await this.downloadLinks.all();
  }

  async getDownloadLinkCount(): Promise<number> {
    return await this.downloadLinks.count();
  }
}
