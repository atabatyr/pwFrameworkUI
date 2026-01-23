import { expect, test } from '@playwright/test';
import { loginAs } from '../src/utils/auth';
import { TEST_DATA } from '../src/data/testData';


test('Login with valid credentials @login @smoke @hello1', async ({ page }) => {
    await loginAs(page, TEST_DATA.validLoginUser);
    await expect(page).toHaveURL('/secure');
});

test('Login with invalid credentials @login @negative @hello1', async ({ page }) => {
    await loginAs(page, TEST_DATA.invalidCredentials);
    const errorMessage = page.locator('#flash');
    await expect(errorMessage).toContainText('Your username is invalid!');
});

test('Login with empty password @login @negative @hello1', async ({ page }) => {
    await loginAs(page, TEST_DATA.emptyPassword);
    const errorMessage = page.locator('#flash');
    await expect(errorMessage).toContainText('Your username is invalid!');
});