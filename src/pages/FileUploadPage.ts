import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class FileUploadPage extends BasePage {
  readonly header: Locator;
  readonly fileInput: Locator;
  readonly uploadButton: Locator;
  readonly dropZone: Locator;
  // Dropzone preview locators
  readonly uploadedFileName: Locator;
  readonly successMark: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole('heading', { name: 'File Uploader' });
    this.fileInput = page.locator('#file-upload');
    this.uploadButton = page.locator('#file-submit');
    this.dropZone = page.locator('#drag-drop-upload');
    this.uploadedFileName = page.locator('.dz-filename span');
    this.successMark = page.locator('.dz-success-mark');


  }

  async navigate() {
    await this.goto('/upload');
  }

  async waitForPageLoaded() {
    await this.header.waitFor({ state: 'visible' });
    await this.fileInput.waitFor({ state: 'visible' });
    await this.dropZone.waitFor({ state: 'visible' });
  }

  async uploadFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
    await this.uploadButton.click();
  }

  async uploadFileViaDragDrop(filePath: string) {
    await this.dropZone.setInputFiles(filePath);
  }

  // ✅ HERE is the method you asked for
  async verifyUploadViaDragAndDropSuccess(fileName: string) {
    // Wait until preview shows up with the filename
    await expect(this.uploadedFileName).toHaveText(fileName);

    // Success mark should become visible after upload completes
    await expect(this.successMark).toBeVisible();
  }
}
