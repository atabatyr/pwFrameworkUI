import { Page } from '@playwright/test';

/**
 * Common helper functions for tests
 */

export class TestHelper {
  /**
   * Wait for a specific time (in milliseconds)
   */
  static async wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Generate random email
   */
  static generateRandomEmail(): string {
    return `testuser_${Date.now()}_${Math.random().toString(36).substring(7)}@example.com`;
  }

  /**
   * Generate random string
   */
  static generateRandomString(length: number = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Check if element is in viewport
   */
  static async isElementInViewport(page: Page, selector: string): Promise<boolean> {
    return page.evaluate((sel) => {
      const element = document.querySelector(sel) as HTMLElement;
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }, selector);
  }

  /**
   * Scroll to element
   */
  static async scrollToElement(page: Page, selector: string) {
    await page.locator(selector).scrollIntoViewIfNeeded();
  }

  /**
   * Accept alert dialog
   */
  static async acceptAlert(page: Page) {
    page.once('dialog', (dialog) => {
      dialog.accept();
    });
  }

  /**
   * Get network idle
   */
  static async waitForNetworkIdle(page: Page, timeout: number = 5000) {
    await page.waitForLoadState('networkidle', { timeout });
  }
}
