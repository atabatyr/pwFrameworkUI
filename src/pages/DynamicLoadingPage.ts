import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicLoadingPage extends BasePage {
  readonly header: Locator;
  readonly startButton: Locator;
  readonly loading: Locator;
  readonly finishText: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole('heading', { name: 'Dynamically Loaded Page Elements' });
    this.startButton = page.getByRole('button', { name: 'Start' });
    this.loading = page.locator('#loading');
    this.finishText = page.locator('#finish h4');
  }

  async navigateToExample1() {
    await this.goto('/dynamic_loading/1');
  }

  async navigateToExample2() {
    await this.goto('/dynamic_loading/2');
  }

  async waitForPageLoaded() {
    await this.header.waitFor({ state: 'visible' });
  }

  async startLoading() {
    await this.startButton.click();
  }

  async waitForLoadingToFinish() {
    await this.loading.waitFor({ state: 'hidden' });
  }

  async waitForHelloWorld() {
    await expect(this.finishText).toHaveText('Hello World!');
  }

  async getResultText(): Promise<string> {
    return (await this.finishText.textContent())?.trim() ?? '';
  }
}
