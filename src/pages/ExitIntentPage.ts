import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ExitIntentPage extends BasePage {
  readonly header: Locator;
  readonly modal: Locator;
  readonly modalTitle: Locator;
  readonly modalBody: Locator;
  readonly closeButton: Locator;
  readonly footer: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole('heading', { name: 'Exit Intent' });
    this.modal = page.locator('#ouibounce-modal');
    this.modalTitle = page.locator('#ouibounce-modal h3');
    this.modalBody = page.locator('#ouibounce-modal .modal-body p');
    this.closeButton = page.locator('#ouibounce-modal .modal-footer p');
    this.footer = page.locator('#page-footer');
  }

  async navigate() {
    await this.goto('/exit_intent');
  }

  async waitForPageLoaded() {
    await this.header.waitFor({ state: 'visible' });
  }

  async triggerExitIntent() {
    // Simulate mouse leaving viewport (top of page)
    await this.page.mouse.move(100, 0);
  }

  async waitForModalVisible() {
    await this.modal.waitFor({ state: 'visible' });
  }

  async closeModal() {
    await this.closeButton.click();
    await this.modal.waitFor({ state: 'hidden' });
  }
}
