import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Forgot Password Tests', () => {
  test('should navigate to forgot password page', async ({ forgotPasswordPage }) => {
    await forgotPasswordPage.navigateToForgotPassword();
    expect(forgotPasswordPage.page.url()).toContain('/forgot_password');
  });

  test('should submit email form', async ({ forgotPasswordPage }) => {
    await forgotPasswordPage.navigateToForgotPassword();
    await forgotPasswordPage.submitEmail('test@example.com');
    const message = await forgotPasswordPage.getSuccessMessage();
    expect(message.length).toBeGreaterThan(0);
  });
});
