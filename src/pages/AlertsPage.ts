import { Locator, Page } from '@playwright/test';

export class AlertsPage {
  readonly alertButton: Locator;
  readonly confirmButton: Locator;
  readonly promptButton: Locator;
  readonly resultText: Locator;

  constructor(private readonly page: Page) {
    this.alertButton = page.getByRole('button', { name: 'Click for JS Alert' });
    this.confirmButton = page.getByRole('button', { name: 'Click for JS Confirm' });
    this.promptButton = page.getByRole('button', { name: 'Click for JS Prompt' });
    this.resultText = page.locator('#result');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  }

  async waitForPageLoaded() {
    await this.alertButton.waitFor({ state: 'visible' });
  }

  async triggerAlertAndAccept() {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });

    await this.alertButton.click();
  }

  async triggerConfirmAndAccept() {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });

    await this.confirmButton.click();
  }

  async triggerConfirmAndDismiss() {
    this.page.once('dialog', async (dialog) => {
      await dialog.dismiss();
    });

    await this.confirmButton.click();
  }

  async triggerPromptAndType(text: string) {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept(text);
    });

    await this.promptButton.click();
  }

  async triggerPromptAndDismiss() {
    this.page.once('dialog', async (dialog) => {
      await dialog.dismiss();
    });

    await this.promptButton.click();
  }

  async getResultText(): Promise<string> {
    return (await this.resultText.textContent()) ?? '';
  }
}
