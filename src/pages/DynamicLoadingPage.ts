import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicLoadingPage extends BasePage {
  readonly example1Link: Locator;
  readonly example2Link: Locator;
  readonly startButton: Locator;
  readonly loadingIndicator: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    super(page);
    this.example1Link = page.locator('a[href="/dynamic_loading/1"]');
    this.example2Link = page.locator('a[href="/dynamic_loading/2"]');
    this.startButton = page.locator('button', { hasText: 'Start' });
    this.loadingIndicator = page.locator('#loading');
    this.result = page.locator('#result');
  }

  /**
   * Navigate to dynamic loading page
   */
  async navigateToDynamicLoading() {
    await this.goto('/dynamic_loading');
  }

  /**
   * Navigate to example 1
   */
  async navigateToExample1() {
    await this.goto('/dynamic_loading/1');
  }

  /**
   * Navigate to example 2
   */
  async navigateToExample2() {
    await this.goto('/dynamic_loading/2');
  }

  /**
   * Click start button
   */
  async clickStart() {
    await this.startButton.click();
  }

  /**
   * Wait for loading to complete
   */
  async waitForLoadingComplete() {
    try {
      await this.loadingIndicator.waitFor({ state: 'hidden', timeout: 30000 });
    } catch {
      // Loading indicator might not be present, continue
    }
    await this.result.waitFor({ state: 'visible', timeout: 30000 });
  }

  /**
   * Get result text
   */
  async getResultText(): Promise<string> {
    return await this.result.textContent() || '';
  }
}
