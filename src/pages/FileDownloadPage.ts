import { Page, Download, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class FileDownloadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to File Downloader page
   */
  async navigate() {
    await this.goto('/download');
  }

  /**
   * Wait until page is ready (header visible)
   */
  async waitForPageLoaded() {
    await this.page
      .getByRole('heading', { name: 'File Downloader' })
      .waitFor({ state: 'visible' });
  }

  /**
   * Download a file by visible link name
   */
  async downloadFileByName(fileName: string): Promise<Download> {
    const fileLink = this.page.getByRole('link', { name: fileName });

    await expect(fileLink).toBeVisible();

    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      fileLink.click(),
    ]);

    return download;
  }
}
