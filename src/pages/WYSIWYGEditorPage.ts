import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class WYSIWYGEditorPage extends BasePage {
  readonly editorFrame: Locator;
  readonly editorContent: Locator;

  constructor(page: Page) {
    super(page);
    this.editorFrame = page.frameLocator('iframe');
    this.editorContent = this.editorFrame.locator('[contenteditable="true"]');
  }

  async navigateToWYSIWYGEditor() {
    await this.goto('/tinymce');
  }

  async clearEditor() {
    await this.editorContent.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
  }

  async typeInEditor(text: string) {
    await this.editorContent.click();
    await this.editorContent.type(text);
  }

  async getEditorContent(): Promise<string> {
    return await this.editorContent.textContent() || '';
  }
}
