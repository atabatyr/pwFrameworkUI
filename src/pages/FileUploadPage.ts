import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FileUploadPage extends BasePage {
  readonly fileInput: Locator;
  readonly uploadButton: Locator;
  readonly uploadedFiles: Locator;

  constructor(page: Page) {
    super(page);
    this.fileInput = page.locator('#file-upload');
    this.uploadButton = page.locator('#file-submit');
    this.uploadedFiles = page.locator('#uploaded-files');
  }

  /**
   * Navigate to file upload page
   */
  async navigateToFileUpload() {
    await this.goto('/upload');
  }

  /**
   * Upload file
   */
  async uploadFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
    await this.uploadButton.click();
  }

  /**
   * Get uploaded file name
   */
  async getUploadedFileName(): Promise<string> {
    await this.uploadedFiles.waitFor({ state: 'visible' });
    return await this.uploadedFiles.textContent() || '';
  }

  /**
   * Verify file upload success
   */
  async verifyFileUploadSuccess(): Promise<boolean> {
    return await this.uploadedFiles.isVisible();
  }
}
