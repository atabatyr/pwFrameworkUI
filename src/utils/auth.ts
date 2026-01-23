import { Page } from '@playwright/test';

export async function loginAs(page: Page, credentials: { email: string; password: string }) {
    await page.goto('/login');
    await page.fill('#username', credentials.email);
    await page.fill('#password', credentials.password);
    await page.click('button[type="submit"]');
}
