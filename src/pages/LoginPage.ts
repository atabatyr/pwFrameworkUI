import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('input[id="username"]');
    this.passwordInput = page.locator('input[id="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.subheader');
    this.errorMessage = page.locator('#flash');
  }

  /**
   * Navigate to login page
   */
  async navigateToLogin() {
    await this.goto('/login');
  }

  /**
   * Verify login page is loaded
   */
  async verifyLoginPageLoaded() {
    await this.usernameInput.waitFor({ state: 'visible' });
  }

  /**
   * Perform login
   */
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Verify login success
   */
  async verifyLoginSuccess(): Promise<string> {
    await this.successMessage.waitFor({ state: 'visible' });
    return await this.successMessage.textContent() || '';
  }

  /**
   * Verify login error
   */
  async verifyLoginError(): Promise<string> {
    await this.errorMessage.waitFor({ state: 'visible' });
    return await this.errorMessage.textContent() || '';
  }

  /**
   * Check if error message is visible
   */
  async isErrorDisplayed(): Promise<boolean> {
    return await this.errorMessage.isVisible();
  }
}
