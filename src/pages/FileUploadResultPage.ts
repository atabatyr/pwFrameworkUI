import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class FileUploadResultPage extends BasePage {
  readonly header: Locator;
  readonly uploadedFiles: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole('heading', { name: 'File Uploaded!' });
    this.uploadedFiles = page.locator('#uploaded-files');
  }

  async waitForPageLoaded() {
    await this.header.waitFor({ state: 'visible' });
    await this.uploadedFiles.waitFor({ state: 'visible' });
  }

  async getUploadedFileName(): Promise<string> {
    return (await this.uploadedFiles.textContent())?.trim() || '';
  }

  async assertUploadedFileName(expectedFileName: string) {
    await expect(this.uploadedFiles).toHaveText(expectedFileName);
  }
}
