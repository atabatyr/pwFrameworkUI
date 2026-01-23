import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class EntryAdPage extends BasePage {
  readonly header: Locator;
  readonly modal: Locator;
  readonly modalTitle: Locator;
  readonly modalBody: Locator;
  readonly closeButton: Locator;
  readonly restartLink: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole('heading', { name: 'Entry Ad' });
    this.modal = page.locator('#modal');
    this.modalTitle = page.locator('#modal h3');
    this.modalBody = page.locator('#modal .modal-body p');
    this.closeButton = page.locator('#modal .modal-footer p');
    this.restartLink = page.locator('#restart-ad');
  }

  async navigate() {
    await this.goto('/entry_ad');
  }

  async waitForPageLoaded() {
    await this.header.waitFor({ state: 'visible' });
  }

  async waitForModalVisible() {
    await this.modal.waitFor({ state: 'visible' });
  }

  async waitForModalHidden() {
    await this.modal.waitFor({ state: 'hidden' });
  }

  async closeModal() {
    await this.closeButton.click();
  }

  async resetAd() {
    await this.restartLink.click();
  }

  async assertModalText() {
    await expect(this.modalTitle).toHaveText('This is a modal window');
    await expect(this.modalBody).toContainText('It\'s commonly used');
  }
}
