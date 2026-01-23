import { Locator, Page, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class WYSIWYGEditorPage extends BasePage {
  readonly frame: FrameLocator;
  readonly editorBody: Locator;

  constructor(page: Page) {
    super(page);
    this.frame = page.frameLocator('#mce_0_ifr');
    this.editorBody = this.frame.locator('body#tinymce');
  }

  async navigateToWYSIWYGEditor() {
    await this.goto('/tinymce');
    await this.editorBody.waitFor({ state: 'visible' });
  }

  async clearEditor() {
    await this.editorBody.evaluate((el) => (el.innerHTML = ''));
  }

  async typeInEditor(text: string) {
    await this.editorBody.click();
    await this.editorBody.type(text);
  }

  async getEditorContent(): Promise<string> {
    return await this.editorBody.textContent() || '';
  }

  async expectToBeOnEditorPage() {
    await expect(this.page).toHaveURL(/\/tinymce/);
  }
}
